/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/showcaseNewsApi2.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseNewsApi2() {
	const pageIdCode = 'showcaseNewsApi2';
	const [message, setMessage] = useState('');
	const pm = new PageManager(pageIdCode);
	
	useEffect(() => {
		pm.callAction('loadPageData').then((data: any) => {
			setMessage(data.message);
		});
	}, []);

	return (
		<div className="page page_showcaseNewsApi2">
			<h2 className="title">Showcase News Api2</h2>
			<p className="description">An info page that displays showcase news api2.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageShowcaseNewsApi2;