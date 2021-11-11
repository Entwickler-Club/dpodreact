/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseSampleDataWithFaker.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseSampleDataWithFaker() {
	const pageIdCode = 'showcaseSampleDataWithFaker';
	const [message, setMessage] = useState('');
	const pm = new PageManager(pageIdCode);
	
	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setMessage(data.message);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseSampleDataWithFaker">
			<h2 className="title">Showcase: Sample Data with Faker</h2>
			<p className="description">An info page that displays showcase: sample data with faker</p>	
			<p className="message">{message}</p>
		</div>
	)
}

export default PageShowcaseSampleDataWithFaker;