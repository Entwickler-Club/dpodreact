import './interfaces';
import { IPageItem } from './interfaces';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';

// TODO: replace with PageItems when ItemTypes are implemented
export const getPageItems = (): IPageItem[] => {
	const fileNames = qfil.getFileNamesInDirectory('src/system/components');
	const rawPageItems: IPageItem[] = fileNames.map(fileName => {
		const baseFileName = qfil.getBaseFileName(fileName);
		return {
			idCode: qstr.forceCamelNotation(baseFileName),
			title: qstr.forceTitleNotation(baseFileName)
		}
	});

	//clean
	const pageItems: IPageItem[] = [];
	rawPageItems.forEach(rawPageItem => {
		let title = qstr.chopLeft(rawPageItem.title, 'Page ');
		title = qstr.replaceAll(title, 'Showcase', 'Showcase:');
		const pageItem = {
			idCode: rawPageItem.idCode,
			title: title
		};
		if (title !== 'Site') {
			pageItems.push(pageItem);
		}
	});
	return pageItems;
}