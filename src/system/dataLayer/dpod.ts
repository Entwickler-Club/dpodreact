import './interfaces';
import { IPageItem, IShowcaseReport } from './interfaces';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';
import ShowcaseReports from '../itemTypes/showcaseReports';

// TODO: replace with PageItems when ItemTypes are implemented
export const getPageItems = (): IPageItem[] => {
	const fileNames = qfil.getFileNamesInDirectory('src/system/pages');
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

export const getShowcaseReports = (dql = ''): Promise<ShowcaseReports> => {
	return new Promise(resolve => {
		const showcaseReports = new ShowcaseReports(dql);
		(async () => {
			await showcaseReports.infuseWithData();
			resolve(showcaseReports);
		})();
	});
}