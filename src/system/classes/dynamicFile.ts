// fixes VSCode variable-checking in other files (ts2451)
export {};

import * as qstr from '../qtools/qstr';
import * as qfil from '../qtools/qfil';
import DynamicFileCodeArea from './dynamicFileCodeArea';
import fs from 'fs';
import * as config from './config';

class DynamicFile {
	private pathAndFileName: string;
	private contents: string;
	private lines: string[];
	private codeAreaMarker: string;
	private codeChunkMarker: string;
	private codeAreas: any[];
	private codeAreaTemplateLines: string[];
	
	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.contents = '';
		this.lines = [];
		this.codeAreaMarker = config.dynamicFileCodeAreaMarker();
		this.codeChunkMarker = config.dynamicFileCodeChunkMarker();
		this.codeAreas = [];
		this.codeAreaTemplateLines = [];
		this.initialize();
	}

	initialize() {
		this.contents = fs.readFileSync(this.pathAndFileName, 'utf8');
		this.lines = qstr.convertStringBlockToLinesNoTrim(this.contents);
		this.buildAreas();
	}

	buildAreas() {
		let currentCodeArea = null;
		let currentlyRecordingCodeArea = false;
		let currentChunkIdCode = '';
		let currentNumberOfCodeChunkLinesRecorded = 0;
		for (const line of this.lines) {
			if (line.includes(this.codeAreaMarker)) {
				const codeAreaSignature = qstr.getRestAfterMarker(line, this.codeAreaMarker);
				currentCodeArea = new DynamicFileCodeArea(codeAreaSignature);
				currentlyRecordingCodeArea = true;
				currentNumberOfCodeChunkLinesRecorded = 0;
				this.codeAreaTemplateLines.push('[[DYNAMIC_CODE_AREA:' + currentCodeArea.idCode + ']]');
			} else if (currentlyRecordingCodeArea) {
				const chunkIdCode = qstr.getRestAfterMarker(line, this.codeChunkMarker);
				if (!qstr.isEmpty(chunkIdCode)) {
					currentCodeArea!.addLineToCodeChunk(chunkIdCode, line);
					currentNumberOfCodeChunkLinesRecorded = 1;
					currentChunkIdCode = chunkIdCode;
				} else {
					if (currentNumberOfCodeChunkLinesRecorded == currentCodeArea!.linesInCodeChunk) {
						this.codeAreas.push(currentCodeArea!);
						currentCodeArea = null;
						currentlyRecordingCodeArea = false;
						currentNumberOfCodeChunkLinesRecorded = 0;
						currentChunkIdCode = '';
					} else {
						currentCodeArea!.addLineToCodeChunk(currentChunkIdCode, line);
						currentNumberOfCodeChunkLinesRecorded++;
					}
				}
			}
			if (!currentlyRecordingCodeArea) {
				this.codeAreaTemplateLines.push(line);
			}

		}
	}

	debugOutput() {
		for (const codeArea of this.codeAreas) {
			//codeArea.debugOutput();
		}
		console.log('TEMPLATE FOR CODE AREAS:');
		console.log('=================================');
		console.log(qstr.convertLinesToStringBlock(this.codeAreaTemplateLines));
		console.log('=================================');
		console.log(qstr.convertLinesToStringBlock(this.getLinesWithUpdatedCodeAreas()));
		console.log('=================================');


	}

	// e.g. finds a line like this: "//extensions: jquery, bootstrap" and returns 'jquery, bootstrap'
	getDataFromVariableLine(marker: string) {
		const variableLinePrefix = `//DYNAMIC_VARIABLE:${marker}=`;
		for (const line of this.lines) {
			if (line.includes(variableLinePrefix)) {
				const data = qstr.chopLeft(line, variableLinePrefix);
				const cleanData = qstr.replaceAll(data, '\r', '');
				return cleanData;
			}
		}
		return '';
	}

	getIdCodeArrayFromVariableLine(marker:string) {
		const extensionLine = this.getDataFromVariableLine(marker);
		const idCodes = qstr.breakIntoParts(extensionLine, ',');
		return idCodes;
	}

	getLine(lineNumber: number) {
		if (lineNumber > this.lines.length || lineNumber < 1) {
			return '';
		}
		const index = lineNumber - 1;
		const line = this.lines[index];
		const cleanLine = qstr.replaceAll(line, '\r', '');
		return cleanLine;
	}

	changeMarkerLineAndSave(marker: string, newLine: string) {
		const fullMarker = '//DYNAMIC_LINE:' + marker;
		const newLines = [];
		for (const line of this.lines) {
			if (line.includes(fullMarker)) {
				const numberOfPrecedingTabs = qstr.getNumberOfPrecedingTabs(line);
				const fullNewLine = qstr.addPrecedingTabs(newLine, numberOfPrecedingTabs) + fullMarker;
				newLines.push(fullNewLine);
			} else {
				newLines.push(line);
			}
		}
		this.lines = newLines;
		this.saveSimpleLines();
	}

	saveSimpleLines() {
		qfil.createFileWithLines(this.pathAndFileName, this.lines);
	}

	save() {
		const lines = this.getLinesWithUpdatedCodeAreas();
		qfil.createFileWithLines(this.pathAndFileName, lines);
	}

	getCodeArea(codeAreaIdCode: string) {
		for (const codeArea of this.codeAreas) {
			if (codeArea.idCode == codeAreaIdCode) {
				return codeArea;
			}
		}
		return null;
	}

	addCodeChunkToCodeArea(codeAreaIdCode:string, codeChunkIdCode:string, lineOrLines:string) {
		let lines = null;
		if (qstr.isArray(lineOrLines)) {
			lines = lineOrLines;
		}
		if (qstr.isString(lineOrLines)) {
			lines = [lineOrLines];
		}
		if (qstr.isArray(lines)) {
			const codeArea = this.getCodeArea(codeAreaIdCode);
			if (codeArea != null) {
				codeArea.addNewCodeChunk(codeChunkIdCode, lines);
			}
		}
	}

	deleteCodeChunkFromCodeArea(codeAreaIdCode: string, codeChunkIdCode: string) {
		const codeArea = this.getCodeArea(codeAreaIdCode);
		if (codeArea != null) {
			codeArea.deleteCodeChunk(codeChunkIdCode);
		}
	}

	getCodeAreaIdCodeFromTemplateMarker(line: string) {
		let r = line;
		r = qstr.chopLeft(r, '[[DYNAMIC_CODE_AREA:');
		r = qstr.chopRight(r, ']]');
		return r;
	}

	getLinesWithUpdatedCodeAreas() {
		let lines: string[] = [];
		for (const line of this.codeAreaTemplateLines) {
			if (line.startsWith('[[DYNAMIC_CODE_AREA')) {
				const areaCodeIdCode = this.getCodeAreaIdCodeFromTemplateMarker(line);
				const areaCode = this.getCodeArea(areaCodeIdCode);
				lines = qstr.addLinesToLines(lines, areaCode.getLinesForTemplateInsertion());
			} else {
				lines.push(line);
			}
		}
		return lines;
	}

}

module.exports = DynamicFile