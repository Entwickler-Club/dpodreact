/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import ComponentDisplayShowcaseReport from '../components/ComponenDisplayShowcaseReport';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [showcaseReports, setShowcaseReports] = useState<ShowcaseReports>(new ShowcaseReports());
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		const showcaseReports = await ShowcaseReports.instantiateFromItemObjects(data.showcaseReportObjects);
		showcaseReports.debug();
		const firstItem = showcaseReports.getFirstItem<ShowcaseReport>();
		firstItem.debug();
		console.log(firstItem.get_title());
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
				<ComponentDisplayShowcaseReport item={showcaseReports.getFirstItem()}/>
			</section>
		</div>
	)
}

export default PageShowcaseManageItemTypes;