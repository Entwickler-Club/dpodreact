import * as qstr from '../qtools/qstr';
import DynamicFileCodeAreaCodeChunk from './dynamicFileCodeAreaCodeChunk';

// fixes VSCode variable-checking in other files (ts2451)
// export { };

class DynamicFileCodeArea {

    public idCode: string;
    public linesInCodeChunk: number;
    private dynamicFileCodeAreaCodeChunks: any[];

    //signature:
    // loadTools
    // controllerCaseStatements, 2
    constructor(signature: string) {
        const parts = qstr.breakIntoParts(signature, ',');
        const idCode = parts[0];
        const linesInCodeChunk = parts.length > 1 ? Number(parts[1]) : 1;

        this.idCode = idCode;
        this.linesInCodeChunk = linesInCodeChunk;
        this.dynamicFileCodeAreaCodeChunks = [];
    }

    addLineToCodeChunk(codeChunkIdCode: string, line: string) {
        let dynamicFileCodeAreaCodeChunk = this.getDynamicFileCodeAreaCodeChunkWithChunkIdCode(codeChunkIdCode);
        if (dynamicFileCodeAreaCodeChunk == null) {
            dynamicFileCodeAreaCodeChunk = new DynamicFileCodeAreaCodeChunk(codeChunkIdCode);
            dynamicFileCodeAreaCodeChunk.addLine(line);
            this.dynamicFileCodeAreaCodeChunks.push(dynamicFileCodeAreaCodeChunk);
        } else {
            dynamicFileCodeAreaCodeChunk.addLine(line);
        }
    }

    addNewCodeChunk(codeChunkIdCode: string, lines: string[]) {
        if (this.dynamicFileCodeAreaCodeChunks.length > 0) {
            if (!this.codeChunkIdCodeAlreadyExists(codeChunkIdCode)) {
                const dynamicFileCodeAreaCodeChunk = new DynamicFileCodeAreaCodeChunk(codeChunkIdCode);
                const numberOfPrecedingTabs = this.dynamicFileCodeAreaCodeChunks[0].numberOfPrecedingTabs;
                dynamicFileCodeAreaCodeChunk.addNewContent(numberOfPrecedingTabs, lines);
                this.dynamicFileCodeAreaCodeChunks.push(dynamicFileCodeAreaCodeChunk);
            }
        }
    }

    codeChunkIdCodeAlreadyExists(codeChunkIdCode: string) {
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            if (dynamicFileCodeAreaCodeChunk.idCode === codeChunkIdCode) {
                return true;
            }
        }
        return false;
    }

    deleteCodeChunk(codeChunkIdCode: string) {
        const newDynamicFileCodeAreaCodeChunks = [];
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            if (dynamicFileCodeAreaCodeChunk.idCode !== codeChunkIdCode) {
                newDynamicFileCodeAreaCodeChunks.push(dynamicFileCodeAreaCodeChunk);
            }
        }
        this.dynamicFileCodeAreaCodeChunks = newDynamicFileCodeAreaCodeChunks;
    }

    getDynamicFileCodeAreaCodeChunkWithChunkIdCode(codeChunkIdCode: string): any {
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            if (dynamicFileCodeAreaCodeChunk.idCode === codeChunkIdCode) {
                return dynamicFileCodeAreaCodeChunk;
            }
        }
        return null;
    }

    debugOutput() {
        console.log('>>> CODEAREA: ' + this.idCode + ' (number of lines in each chunk = ' + this.linesInCodeChunk + ')');
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            dynamicFileCodeAreaCodeChunk.debugOutput();
        }
    }

    getFirstLinePrecedingTabs() {
        let ri = 0;
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            ri = dynamicFileCodeAreaCodeChunk.getPrecedingTabsOfFirstLine();
        }
        return ri;
    }

    getLinesForTemplateInsertion() {
        let lines = [];

        let firstLine = qstr.tabs(this.getFirstLinePrecedingTabs()) + 'DYNAMIC_CODE_AREA' + this.idCode;
        if (this.linesInCodeChunk !== 1) {
            firstLine += ',' + this.linesInCodeChunk;
        }

        lines.push(firstLine);
        for (const dynamicFileCodeAreaCodeChunk of this.dynamicFileCodeAreaCodeChunks) {
            lines = qstr.addLinesToLines(lines, dynamicFileCodeAreaCodeChunk.getLinesForTemplateInsertion());
        }
        return lines;
    }

}

export default DynamicFileCodeArea;