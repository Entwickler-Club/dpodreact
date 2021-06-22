import TextFileBuilder from './textFileBuilder';
import * as qstr from '../qtools/qstr';

class DpodSiteBuilder {

    static createPage(pageTitle: string) {
        const pageSyntaxVariations = qstr.getTermSyntaxVariations(pageTitle, 'page');
        const data = {
            ...pageSyntaxVariations
        };
        // main display page
        const textFileBuilder = new TextFileBuilder('newPageComponent');
        textFileBuilder.data = data;
        textFileBuilder.buildNow(`src/custom/components/page${data.pagePascal}.tsx`);

        // stylesheet
        const textFileBuilderStylesheet = new TextFileBuilder('newPageComponentStylesheet');
        textFileBuilderStylesheet.data = data;
        textFileBuilderStylesheet.buildNow(`src/custom/styles/${data.pageCamel}.scss`);

    }

    static log(line: string) {
        // eslint-disable-next-line no-console
        console.log(`>>> ${line}`);
    }
}

export default DpodSiteBuilder;