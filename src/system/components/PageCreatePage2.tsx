/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/createPage2.scss';
import PageManager from '../classes/pageManager';

function PageCreatePage2() {
	const pageIdCode = 'createPage2';
	const [message, setMessage] = useState('');
	const pm = new PageManager(pageIdCode);
	
	useEffect(() => {
		pm.callAction('loadPageData').then((data: any) => {
			setMessage(data.message);
		});
	}, []);

	return (
		<div className="page page_createPage2">
			<h2 className="title">Create Page2</h2>
			<p className="description">An info page that displays create page2.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageCreatePage2;