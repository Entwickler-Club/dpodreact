import TextFileBuilder from './textFileBuilder';
import * as qstr from '../qtools/qstr';
import * as qfil from '../qtools/qfil';
import DynamicFile from './dynamicFile';

class DpodSiteBuilder {

	// TODO: convert from static class to object class

	static getPageComponentPathAndFileName(pascalNotation: string) {
		return `src/system/components/Page${pascalNotation}.tsx`;
	}

	static getPageStylesheetPathAndFileName(pascalNotation: string) {
		return `src/system/styles/${pascalNotation}.scss`;
	}

	static createPage(pageTitle: string, pageKindIdCode: string = '') {
		console.log(`PAGE KIND: ${pageKindIdCode}`);
		const pageSyntaxVariations = qstr.getTermSyntaxVariations(pageTitle, 'page');
		const data = {
			...pageSyntaxVariations
		};
		// main display page
		const textFileBuilder = new TextFileBuilder('newPageComponent');
		textFileBuilder.data = data;
		textFileBuilder.buildNow(DpodSiteBuilder.getPageComponentPathAndFileName(data.pagePascal));

		// stylesheet
		const textFileBuilderStylesheet = new TextFileBuilder('newPageComponentStylesheet');
		textFileBuilderStylesheet.data = data;
		// TODO: create enums on data
		textFileBuilderStylesheet.buildNow(DpodSiteBuilder.getPageStylesheetPathAndFileName(data.pageCamel));

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.addCodeChunkToCodeArea('loadPageComponentLines', data.pageCamel, `import Page${data.pagePascal} from './Page${data.pagePascal}';`);
		systemDynamicFile.addCodeChunkToCodeArea('linkPageComponentLines', data.pageCamel, `<span><Link to='/${data.pageCamel}'>${pageTitle}</Link></span>`);
		systemDynamicFile.addCodeChunkToCodeArea('routePageComponentLines', data.pageCamel, `<Route path='/${data.pageCamel}'><Page${data.pagePascal} /></Route>`);
		systemDynamicFile.save();
	}

	static deletePage(pageTitle: string) {
		const pageSyntaxVariations = qstr.getTermSyntaxVariations(pageTitle, 'page');
		const data = {
			...pageSyntaxVariations
		};

		// delete main display page
		qfil.deleteFile(DpodSiteBuilder.getPageComponentPathAndFileName(data.pagePascal));

		// delete stylesheet
		qfil.deleteFile(DpodSiteBuilder.getPageStylesheetPathAndFileName(data.pageCamel));

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.deleteCodeChunkFromCodeArea('loadPageComponentLines', data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('linkPageComponentLines', data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('routePageComponentLines', data.pageCamel);
		systemDynamicFile.save();
	}

	static log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;