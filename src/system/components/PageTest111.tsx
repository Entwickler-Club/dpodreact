/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test111.scss';
import PageManager from '../classes/pageManager';

function PageTest111() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('test111').then(data => {
			console.log(data);
			setMessage(data.pageDataFromJson.message); 
			});
	}, []);

	return (
		<div className="page page_test111">
			<h2 className="title">Test 111</h2>
			<p className="description">An info page that displays test 111.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageTest111;