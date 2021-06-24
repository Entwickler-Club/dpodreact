import * as qstr from '../qtools/qstr';

// fixes VSCode variable-checking in other files (ts2451)
// export { };

class DynamicFileCodeAreaCodeChunk {

    public idCode: string;
    private numberOfPrecedingTabs: any[];
    private lines: string[];


    constructor(idCode: string) {
        this.idCode = idCode;
        this.numberOfPrecedingTabs = [];
        this.lines = [];
    }

    addLine(fullLine: string) {
        const values = qstr.removeEndMarkerAndGetNumberOfPrecedingTabsAndLine(fullLine, 'DYNAMIC_CODE_AREA');
        const numberOfPrecedingTabs = values[0];
        const line = values[1];
        this.numberOfPrecedingTabs.push(numberOfPrecedingTabs);
        this.lines.push(line);
    }

    getPrecedingTabsOfFirstLine() {
        return this.numberOfPrecedingTabs[0];
    }

    addNewContent(numberOfPrecedingTabs: string[], lines: string[]) {
        this.numberOfPrecedingTabs = numberOfPrecedingTabs;
        this.lines = lines;
    }

    debugOutput() {
        console.log('      [' + this.idCode + ']');
        let index = 0;
        for (const line of this.lines) {
            const numberOfPrecedingTabs = this.numberOfPrecedingTabs[index];
            console.log('         (tab=' + numberOfPrecedingTabs + ') |' + line + '|');
            index++;
        }
    }

    getLinesForTemplateInsertion() {
        const newLines = [];
        let index = 0;
        for (const line of this.lines) {
            const numberOfPrecedingTabs = this.numberOfPrecedingTabs[index];
            let marker = '';
            if (index == 0) {
                marker = ' //:' + this.idCode;
            }
            const newLine = qstr.tabs(numberOfPrecedingTabs) + line + marker;
            newLines.push(newLine);
            index++;
        }
        return newLines;
    }

}

export default DynamicFileCodeAreaCodeChunk;