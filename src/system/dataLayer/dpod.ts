import './interfaces';
import { IPageItem, IShowcaseReport } from './interfaces';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';
import ShowcaseReports from '../itemTypes/showcaseReports';

// TODO: replace with PageItems when ItemTypes are implemented
export const getPageItems = (): IPageItem[] => {
	const fileNames = qfil.getFileNamesInDirectory('src/system/components');
	const rawPageItems: IPageItem[] = fileNames.map(fileName => {
		let baseFileName = qfil.getBaseFileName(fileName);
		baseFileName = qstr.chopLeft(baseFileName, 'Page');
		return {
			id: 0,
			idCode: qstr.forceCamelNotation(baseFileName),
			title: qstr.forceTitleNotation(baseFileName),
			systemWhenCreated: '2021-09-21 12:00:00',
			systemWhoCreated: 'system'
		}
	});

	//clean
	const pageItems: IPageItem[] = [];
	rawPageItems.forEach(rawPageItem => {
		const title = qstr.replaceAll(rawPageItem.title, 'Showcase', 'Showcase:');
		const pageItem = {
			id: 0,
			idCode: rawPageItem.idCode,
			title,
			systemWhenCreated: '2021-09-21 12:00:00',
			systemWhoCreated: 'system'
		};
		if (title !== 'Site') {
			pageItems.push(pageItem);
		}
	});
	return pageItems;
}

export const getShowcaseReports = (): ShowcaseReports => {
	const scrData = [
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
		},
		{
			id: 3,
			title: "Showcase #3",
			description: "desc 3",
			systemWhenCreated: '2021-09-21 10:00:02',
			systemWhoCreated: 'admin'
		},
		{
			id: 4,
			title: "Showcase #4",
			description: "desc 4",
			systemWhenCreated: '2021-09-21 10:00:02',
			systemWhoCreated: 'admin'
		}
	]
	return ShowcaseReports.instantiateFromObjectArray(scrData);
}