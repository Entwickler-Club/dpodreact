import TextFileBuilder from './textFileBuilder';
import * as qstr from '../qtools/qstr';
import DynamicFile from './dynamicFile';

class DpodSiteBuilder {

	// TODO: convert from static class to object class

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

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.addCodeChunkToCodeArea('loadPageComponentLines', data.pageCamel, `import Page${data.pagePascal} from './Page${data.pagePascal}';`);
		systemDynamicFile.addCodeChunkToCodeArea('linkPageComponentLines', data.pageCamel, `<li><Link to='/${data.pageCamel}'>${pageTitle}</Link></li>`);
		systemDynamicFile.addCodeChunkToCodeArea('routePageComponentLines', data.pageCamel, `<Route path='/${data.pageCamel}'><Page${data.pagePascal} /></Route>`);
		systemDynamicFile.save();

	}

	static log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;