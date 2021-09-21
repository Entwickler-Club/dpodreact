/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseManageItemTypes.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseManageItemTypes() {
	const pageIdCode = 'showcaseManageItemTypes';
	const [message, setMessage] = useState('');
	const pm = new PageManager(pageIdCode);
	
	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setMessage(data.message);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseManageItemTypes">
			<h2 className="title">Showcase: Manage Item Types</h2>
			<p className="description">An info page that displays showcase manage item types</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageShowcaseManageItemTypes;