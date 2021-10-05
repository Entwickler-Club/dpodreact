/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import ComponentDisplayShowcaseReport from '../components/ComponenDisplayShowcaseReport';
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
		const showcaseReports = await ShowcaseReports.instantiateFromItemObjects<ShowcaseReports, ShowcaseReport, IShowcaseReport>(ShowcaseReports, ShowcaseReport, data.showcaseReportObjects);

		showcaseReports.debug();
		const firstItem = showcaseReports.getFirstItem<ShowcaseReport>();
		setFirstItem(firstItem);

		setShowcaseReports(showcaseReports);
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