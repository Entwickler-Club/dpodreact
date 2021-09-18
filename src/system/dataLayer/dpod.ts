import './interfaces';
import { IPageItem } from './interfaces';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';

// TODO: replace with PageItems when ItemTypes are implemented
export const getPageItems = () : IPageItem[] => {
	const fileNames = qfil.getFileNamesInDirectory('src/system/components');
	return fileNames.map(fileName => {
		const baseFileName = qfil.getBaseFileName(fileName);
		return {
			idCode: qstr.forceCamelNotation(baseFileName),
			title: qstr.forceTitleNotation(baseFileName)
		}
	});
}