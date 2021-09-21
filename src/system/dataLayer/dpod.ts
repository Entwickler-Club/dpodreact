import './interfaces';
import { IPageItem, IShowcaseReport } from './interfaces';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';

// TODO: replace with PageItems when ItemTypes are implemented
export const getPageItems = (): IPageItem[] => {
	const fileNames = qfil.getFileNamesInDirectory('src/system/components');
	const rawPageItems: IPageItem[] = fileNames.map(fileName => {
		let baseFileName = qfil.getBaseFileName(fileName);
		baseFileName = qstr.chopLeft(baseFileName, 'Page');
		return {
			idCode: qstr.forceCamelNotation(baseFileName),
			title: qstr.forceTitleNotation(baseFileName)
		}
	});

	//clean
	const pageItems: IPageItem[] = [];
	rawPageItems.forEach(rawPageItem => {
		const title = qstr.replaceAll(rawPageItem.title, 'Showcase', 'Showcase:');
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


export const getShowcaseReports = (): IShowcaseReport[] => {
	return [
		{
			id: 1,
			title: "Showcase #1",
			description: "desc 1",
			systemWhenCreated: '2021-09-21 10:00:02',
			systemWhoCreated: 'admin'
		},
		{
			id: 2,
			title: "Showcase #2",
			description: "desc 2",
			systemWhenCreated: '2021-09-21 10:00:02',
			systemWhoCreated: 'admin'
		}
	]
}