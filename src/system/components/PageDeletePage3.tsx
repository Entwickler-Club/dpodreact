/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/deletePage3.scss';
import PageManager from '../classes/pageManager';

function PageDeletePage3() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('deletePage3').then(data => {
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_deletePage3">
			<h2 className="title">Delete Page 3</h2>
			<p className="description">An info page that displays delete page 3.</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageDeletePage3;