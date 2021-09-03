/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/testPage444.scss';
import * as config from '../config';

const backendPort = config.getBackendPort();

function PageTestPage444() {
	const [message, setMessage] = useState('');
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/controllerTestPage444`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				action: 'loadPageData'
			})
		}).then(response => response.json())
			.then((pageData: any) => {
				console.log(pageData);
				setMessage(pageData.message);
			});
	}, []);

	return (
		<div className="page page_testPage444">
			<h2 className="title">Test Page 444</h2>
			<p className="description">An info page that displays test page 444.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTestPage444;