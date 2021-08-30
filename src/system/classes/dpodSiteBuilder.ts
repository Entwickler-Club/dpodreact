import TextFileBuilder from './textFileBuilder';
import * as qstr from '../qtools/qstr';
import * as qfil from '../qtools/qfil';
import DynamicFile from './dynamicFile';

class DpodSiteBuilder {

	private pageTitle: string = '';
	private pageKindIdCode: string = '';
	private info: any = {};

	constructor(pageTitle: string, pageKindIdCode: string = '', info:any) {
		this.pageTitle = pageTitle;
		this.pageKindIdCode = pageKindIdCode;
		this.info = info;
	}

	getPageComponentPathAndFileName(pascalNotation: string) {
		return `src/system/components/Page${pascalNotation}.tsx`;
	}

	getPageStylesheetPathAndFileName(pascalNotation: string) {
		return `src/system/styles/${pascalNotation}.scss`;
	}

	createPage() {
		switch (this.pageKindIdCode) {
			case 'pageWithSassFile':
				const pageSyntaxVariations = qstr.getTermSyntaxVariations(this.pageTitle, 'page');
				const data = {
					...pageSyntaxVariations
				};
				// main display page
				const textFileBuilder = new TextFileBuilder('newPageComponent');
				textFileBuilder.data = data;
				textFileBuilder.buildNow(this.getPageComponentPathAndFileName(data.pagePascal));

				// stylesheet
				const textFileBuilderStylesheet = new TextFileBuilder('newPageComponentStylesheet');
				textFileBuilderStylesheet.data = data;
				// TODO: create enums on data
				textFileBuilderStylesheet.buildNow(this.getPageStylesheetPathAndFileName(data.pageCamel));

				// make modifications in the Site.tsx file
				const systemDynamicFile = new DynamicFile('../components/Site.tsx');
				systemDynamicFile.addCodeChunkToCodeArea('loadPageComponentLines', data.pageCamel, `import Page${data.pagePascal} from './Page${data.pagePascal}';`);
				systemDynamicFile.addCodeChunkToCodeArea('linkPageComponentLines', data.pageCamel, `<span><Link to='/${data.pageCamel}'>${this.pageTitle}</Link></span>`);
				systemDynamicFile.addCodeChunkToCodeArea('routePageComponentLines', data.pageCamel, `<Route path='/${data.pageCamel}'><Page${data.pagePascal} /></Route>`);
				systemDynamicFile.save();
				break;
			case 'pageWithSassFileAndController':
				this.info.error = 'pageWithSassFileAndController not found';
				break;
			case 'pageWithSassFileControllerAndJsonFile':
				this.info.error = 'pageWithSassFileControllerAndJsonFile not found';
				break;
		}
	}

	getInfo() {
		return this.info;
	}

	deletePage(pageTitle: string) {
		const pageSyntaxVariations = qstr.getTermSyntaxVariations(pageTitle, 'page');
		const data = {
			...pageSyntaxVariations
		};

		// delete main display page
		qfil.deleteFile(this.getPageComponentPathAndFileName(data.pagePascal));

		// delete stylesheet
		qfil.deleteFile(this.getPageStylesheetPathAndFileName(data.pageCamel));

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.deleteCodeChunkFromCodeArea('loadPageComponentLines', data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('linkPageComponentLines', data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('routePageComponentLines', data.pageCamel);
		systemDynamicFile.save();
	}

	log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;