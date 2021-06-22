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
		textFileBuilder.buildNow(`src/system/components/Page${data.pagePascal}.tsx`);

		// stylesheet
		const textFileBuilderStylesheet = new TextFileBuilder('newPageComponentStylesheet');
		textFileBuilderStylesheet.data = data;
		textFileBuilderStylesheet.buildNow(`src/system/styles/${data.pageCamel}.scss`);

		DpodSiteBuilder.log('TODO: Make appropriate changes to src\\system\\components\\site.tsx');
	}

	static log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;