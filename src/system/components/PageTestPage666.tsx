/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/testPage666.scss';
import PageManager from '../classes/pageManager';

function PageTestPage666() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('testPage666').then(data => {
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_testPage666">
			<h2 className="title">Test Page 666</h2>
			<p className="description">An info page that displays test page 666.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTestPage666;