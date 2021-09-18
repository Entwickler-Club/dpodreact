import './interfaces';
import { IPageItem } from './interfaces';

export const getPageItems = () : IPageItem[] => {
	return [
		{
			idCode: 'test111',
			title: 'Test 111'
		},
		{
			idCode: 'test333',
			title: 'Test 333'
		},
		{
			idCode: 'showcaseNewsApi',
			title: 'Showcase News API'
		}
	];
}