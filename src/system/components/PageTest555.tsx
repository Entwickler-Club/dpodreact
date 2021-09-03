/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test555.scss';
import PageManager from '../classes/pageManager';

function PageTest555() {

	const [message, setMessage] = useState('');
	const [reports, setReports] = useState(['lksdfj', 'dkf', '333']);

	useEffect(() => {
		PageManager.loadDataFromController('test555').then(data => {
			console.log(data);
			setMessage(data.pageDataFromJson.message);
			// setReports({...data.pageDataFromJson.reports}); 
		});
	}, []);

	return (
		<div className="page page_test555">
			<h2 className="title">Test 555</h2>
			<p className="description">An info page that displays test 555.</p>
			<p className="message">{message}</p>
			<p>{reports.map(report => {
				return (
					<>
						<div>{report}</div>
					</>
				)
			})}</p>
		</div>
	)
}

export default PageTest555;