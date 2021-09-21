/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [showcaseReports, setShowcaseReports] = useState([]);
	const pm = new PageManager(pageIdCode);
	
	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setShowcaseReports(data.showcaseReports);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseManageItemTypes">
			<h2 className="title">Showcase: Manage Item Types</h2>
			<p className="description">An info page that displays showcase manage item types</p>	
			<p className="message">{showcaseReports.length}</p>
		</div>
	)
}

export default PageShowcaseManageItemTypes;