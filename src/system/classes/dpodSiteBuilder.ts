import TextFileBuilder from './textFileBuilder';
import * as qstr from '../qtools/qstr';
import * as qfil from '../qtools/qfil';
import DynamicFile from './dynamicFile';

class DpodSiteBuilder {

	private pageTitle: string = '';
	private pageKindIdCode: string = '';
	private info: any = {};
	private data: any = {};

	constructor(pageTitle: string, pageKindIdCode: string = '', info: any = {}) {
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

	getPageContollerPathAndFileName(pascalNotation: string) {
		return `src/system/controllers/controller${pascalNotation}.ts`;
	}

	buildBasePageFunctionality() {
		const pageSyntaxVariations = qstr.getTermSyntaxVariations(this.pageTitle, 'page');
		this.data = {
			...pageSyntaxVariations
		};
		// main display page
		const textFileBuilder = new TextFileBuilder('newPageComponent');
		textFileBuilder.data = this.data;
		textFileBuilder.buildNow(this.getPageComponentPathAndFileName(this.data.pagePascal));

		// stylesheet
		const textFileBuilderStylesheet = new TextFileBuilder('newPageComponentStylesheet');
		textFileBuilderStylesheet.data = this.data;
		// TODO: create enums on data
		textFileBuilderStylesheet.buildNow(this.getPageStylesheetPathAndFileName(this.data.pageCamel));

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.addCodeChunkToCodeArea('loadPageComponentLines', this.data.pageCamel, `import Page${this.data.pagePascal} from './Page${this.data.pagePascal}';`);
		systemDynamicFile.addCodeChunkToCodeArea('linkPageComponentLines', this.data.pageCamel, `<span><Link to='/${this.data.pageCamel}'>${this.pageTitle}</Link></span>`);
		systemDynamicFile.addCodeChunkToCodeArea('routePageComponentLines', this.data.pageCamel, `<Route path='/${this.data.pageCamel}'><Page${this.data.pagePascal} /></Route>`);
		systemDynamicFile.save();
	}

	createPage() {
		switch (this.pageKindIdCode) {
			case 'pageWithSassFile':
				this.buildBasePageFunctionality();
				break;
			case 'pageWithSassFileAndController':
				this.buildBasePageFunctionality();

				// component
				const textFileBuilderController = new TextFileBuilder('newPageController');
				textFileBuilderController.data = this.data;
				textFileBuilderController.buildNow(this.getPageContollerPathAndFileName(this.data.pagePascal));
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