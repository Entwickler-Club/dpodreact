/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test333.scss';
import PageManager from '../classes/pageManager';

function PageTest333() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('test333').then(data => {
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_test333">
			<h2 className="title">Test 333</h2>
			<p className="description">An info page that displays test 333.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTest333;