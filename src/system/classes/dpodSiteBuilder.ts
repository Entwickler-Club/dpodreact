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

	buildBasePageFunctionality(pageId: string) {
		const componentTemplateIdCode = 'newPage1Component'; 
		const styleshheetTemplateIdCode = 'newPage1Stylesheet';
		const pageSyntaxVariations = qstr.getTermSyntaxVariations(this.pageTitle, 'page');
		this.data = {
			...pageSyntaxVariations
		};
		// main display page
		const textFileBuilder = new TextFileBuilder(componentTemplateIdCode);
		textFileBuilder.data = this.data;
		textFileBuilder.buildNow(this.getPageComponentPathAndFileName(this.data.pagePascal));

		// stylesheet
		const textFileBuilderStylesheet = new TextFileBuilder(styleshheetTemplateIdCode);
		textFileBuilderStylesheet.data = this.data;
		// TODO: create enums on data
		textFileBuilderStylesheet.buildNow(this.getPageStylesheetPathAndFileName(this.data.pageCamel));

		// make modifications in the Site.tsx file
		const siteDynamicFile = new DynamicFile('../components/Site.tsx');
		siteDynamicFile.addCodeChunkToCodeArea('loadPageComponentLines', this.data.pageCamel, `import Page${this.data.pagePascal} from './Page${this.data.pagePascal}';`);
		siteDynamicFile.addCodeChunkToCodeArea('linkPageComponentLines', this.data.pageCamel, `<span><Link to='/${this.data.pageCamel}'>${this.pageTitle}</Link></span>`);
		siteDynamicFile.addCodeChunkToCodeArea('routePageComponentLines', this.data.pageCamel, `<Route path='/${this.data.pageCamel}'><Page${this.data.pagePascal} /></Route>`);
		siteDynamicFile.save();
	}

	createPage() {
		switch (this.pageKindIdCode) {
			case 'pageWithSassFile':
				this.buildBasePageFunctionality('1');
				break;
			case 'pageWithSassFileAndController':
				this.buildBasePageFunctionality('2');

				// build controller
				const textFileBuilderController = new TextFileBuilder('newPage2Controller');
				textFileBuilderController.data = this.data;
				textFileBuilderController.buildNow(this.getPageContollerPathAndFileName(this.data.pagePascal));

				// make modifications in the controllerFactory.ts file
				const controllerFactoryDynamicFile = new DynamicFile('../factories/controllerFactory.ts');
				controllerFactoryDynamicFile.addCodeChunkToCodeArea('loadClasses', this.data.pageCamel, `import Controller${this.data.pagePascal} from '../controllers/controller${this.data.pagePascal}';`);
				controllerFactoryDynamicFile.addCodeChunkToCodeArea('switchBlock', this.data.pageCamel,
					[
						`case 'controller${this.data.pagePascal}':`,
						`return new Controller${this.data.pagePascal}(request, response);`
					]
				);
				controllerFactoryDynamicFile.save();
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
		this.data = {
			...pageSyntaxVariations
		};

		// delete main display page
		qfil.deleteFile(this.getPageComponentPathAndFileName(this.data.pagePascal));

		// delete stylesheet
		qfil.deleteFile(this.getPageStylesheetPathAndFileName(this.data.pageCamel));

		// delete controller (if there is one)
		qfil.deleteFile(this.getPageContollerPathAndFileName(this.data.pagePascal));

		// make modifications in the Site.tsx file
		const systemDynamicFile = new DynamicFile('../components/Site.tsx');
		systemDynamicFile.deleteCodeChunkFromCodeArea('loadPageComponentLines', this.data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('linkPageComponentLines', this.data.pageCamel);
		systemDynamicFile.deleteCodeChunkFromCodeArea('routePageComponentLines', this.data.pageCamel);
		systemDynamicFile.save();
	}

	log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;