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
		systemDynamicFile.addCodeChunkToCodeArea('loadPageComponents', data.pageCamel, `import PageShowcase${data.pagePascal} from './PageShowcase${data.pagePascal}';`);
		systemDynamicFile.addCodeChunkToCodeArea('linkPageComponents', data.pageCamel, `<li><Link to='/showcaseCounterUsingState'>Showcase: Counter Using State</Link></li>`);
		systemDynamicFile.save();


		// TODO: send data into DynamicFile
		// const singularItemTypeIdCode = qstr.forceSingular(data.pageCamel); // showcaseBook
		// const singularItemTypeClass = qstr.forcePascalNotation(singularItemTypeIdCode); // e.g. ShowcaseBook
		// const pluralItemTypeIdCode = qstr.forcePlural(this.idCode); // showcaseBooks
		// const pluralItemTypeClass = qstr.forcePascalNotation(pluralItemTypeIdCode); // e.g. ShowcaseBooks

		// this.systemDynamicFile.addCodeChunkToCodeArea('includeItemArea', this.idCode, `const ${singularItemTypeClass} = require('../systemItems/${singularItemTypeIdCode}');`);
		// this.systemDynamicFile.addCodeChunkToCodeArea('instantiateItemArea', this.idCode, `"${this.idCode}": ${singularItemTypeClass},`);

		// this.systemDynamicFile.addCodeChunkToCodeArea('includeItemsArea', this.idCode, `const ${pluralItemTypeClass} = require('../systemItems/${pluralItemTypeIdCode}');`);
		// this.systemDynamicFile.addCodeChunkToCodeArea('instantiateItemsArea', this.idCode, `"${this.idCode}": ${pluralItemTypeClass},`);

	}

	static log(line: string) {
		// eslint-disable-next-line no-console
		console.log(`>>> ${line}`);
	}
}

export default DpodSiteBuilder;