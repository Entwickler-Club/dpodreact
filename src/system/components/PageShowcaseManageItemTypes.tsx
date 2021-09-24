/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import { ShowcaseReportsMain, ShowcaseReportMain, ShowcaseReportMainKind, ShowcaseReportList, ShowcaseReportsMainKind } from './ShowcaseReportComponents';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [showcaseReports, setShowcaseReports] = useState<ShowcaseReports>(new ShowcaseReports());
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		const showcaseReports = await ShowcaseReports.instantiateFromItemObjects(data.showcaseReportObjects);
		setShowcaseReports(showcaseReports);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseManageItemTypes">
			<h2 className="title">Showcase: Manage Item Types</h2>
			<p className="description">An info page that displays showcase manage item types</p>
			<section>
				<h3>Singular components</h3>
				<div>
					{showcaseReports.getItems<ShowcaseReport>().map((showcaseReport, index) => {
						return (
							<div key={index}>
								<ShowcaseReportMain item={showcaseReport} kind={ShowcaseReportMainKind.display} />
								<ShowcaseReportMain item={showcaseReport} kind={ShowcaseReportMainKind.displayAndEdit} />
								<ShowcaseReportList item={showcaseReport} />
								<hr />
							</div>
						)
					})}
				</div>
			</section>
			<section>
				<h3>Plural components</h3>
				<ShowcaseReportsMain items={showcaseReports} kind={ShowcaseReportsMainKind.displayAndEdit} />
			</section>
		</div>
	)
}

export default PageShowcaseManageItemTypes;