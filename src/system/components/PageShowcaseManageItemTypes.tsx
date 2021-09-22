/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';
import { IShowcaseReport } from '../dataLayer/interfaces';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [showcaseReports, setShowcaseReports] = useState<ShowcaseReports>(new ShowcaseReports());
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		const showcaseReports = ShowcaseReports.instantiateFromObjectArray(data.showcaseReportObjects); 
		setShowcaseReports(showcaseReports);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseManageItemTypes">
			<h2 className="title">Showcase: Manage Item Types</h2>
			<p className="description">An info page that displays showcase manage item types</p>
			<div>
				{showcaseReports.getItems<ShowcaseReport>().map((showcaseReport) => {
					return (
						<div dangerouslySetInnerHTML={{__html:showcaseReport.displayAsHtml()}}>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PageShowcaseManageItemTypes;