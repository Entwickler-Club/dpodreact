/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test444.scss';
import PageManager from '../classes/pageManager';

function PageTest444() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('test444').then(data => {
			setMessage(data.pageDataFromJson.message); 
			});
	}, []);

	return (
		<div className="page page_test444">
			<h2 className="title">Test 444</h2>
			<p className="description">An info page that displays test 444.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTest444;