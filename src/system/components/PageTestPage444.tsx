/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/testPage444.scss';
import PageManager from '../classes/pageManager';

function PageTestPage444() {
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');
	useEffect(() => {
		PageManager.loadDataFromController('testPage444').then(data => {
			setMessage(data.message);
			setStatus(data.status);
			});
	}, []);

	return (
		<div className="page page_testPage444">
			<h2 className="title">Test Page 444</h2>
			<p className="description">An info page that displays test page 444.</p>
			<p className="message">{message}</p>
			<p>status: {status}</p>
		</div>
	)
}

export default PageTestPage444;