/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test222.scss';
import PageManager from '../classes/pageManager';

function PageTest222() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('test222').then(data => {
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_test222">
			<h2 className="title">Test 222</h2>
			<p className="description">An info page that displays test 222.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTest222;