/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test777.scss';
import PageManager from '../classes/pageManager';

function PageTest777() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		console.log('before');
		PageManager.loadDataFromController('test777').then(data => {
			console.log(data);
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_test777">
			<h2 className="title">Test 777</h2>
			<p className="description">An info page that displays test 777.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTest777;