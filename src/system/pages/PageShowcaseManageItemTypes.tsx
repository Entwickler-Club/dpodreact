/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import ComponentDisplayShowcaseReport from '../components/ComponentDisplayShowcaseReport';
import ComponentDisplayShowcaseReports from '../components/ComponentDisplayShowcaseReports';
import { IShowcaseReport } from '../dataLayer/interfaces';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [showcaseReports, setShowcaseReports] = useState<ShowcaseReports>(new ShowcaseReports());
	const [firstItem, setFirstItem] = useState<ShowcaseReport>(new ShowcaseReport());
	const [editable, setEditable] = useState<boolean>(false);

	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		const initialShowcaseReports = await ShowcaseReports.instantiateFromItemObjects<ShowcaseReports, ShowcaseReport, IShowcaseReport>(ShowcaseReports, ShowcaseReport, data.showcaseReportObjects);
		const initialShowcaseReport = await ShowcaseReport.instantiateFromItemObject<ShowcaseReport, IShowcaseReport>(ShowcaseReport, data.showcaseReportItemObject);

		console.log('frontend object is:');
		console.log(data.showcaseReportItemObject);

		// testing
		// const showcaseReportItemObject: IShowcaseReport = {
		// 	id: 999,
		// 	title: 'title_defined_in_tsx',
		// 	description: 'test ddd',
		// 	systemWhoCreated: '',
		// 	systemWhenCreated: '2021-10-08 10:36:02'
		// };
		// console.log('in TSX: ' + initialShowcaseReport.get_title());
		// TODO: change setFirstItem to setShowcaseReport

		// TODO: firstItem --> showcaseReport
		setFirstItem(initialShowcaseReport);
		setShowcaseReports(initialShowcaseReports);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	const toggleEditable = () => {
		setEditable(!editable);
	}

	return (
		<div className="page page_showcaseManageItemTypes">
			<h2 className="title">Showcase: Manage Item Types</h2>
			<p className="description">An info page that displays showcase manage item types</p>
			<section className="controlPanel">
				<button onClick={toggleEditable}>Show Edit Buttons</button>
			</section>
			<section>
				<h3>Singular Components</h3>
				<ComponentDisplayShowcaseReport item={firstItem} editable={editable} />
				<h3>Plural Components</h3>
				<ComponentDisplayShowcaseReports items={showcaseReports} editable={editable} />
			</section>
		</div>
	)
}

export default PageShowcaseManageItemTypes;