/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/test555.scss';
import PageManager from '../classes/pageManager';

function PageTest555() {

	const [message, setMessage] = useState('');
	const [reports, setReports] = useState([]);
	const [config, setConfig] = useState<any>({});

	useEffect(() => {

		PageManager.loadDataFromController('test555').then(data => {
			setMessage(data.pageDataFromJson.message);
			setReports(data.pageDataFromJson.reports);
			setConfig(data.pageDataFromJson.config);
		});
	}, []);

	return (
		<div className="page page_test555">
			<h2 className="title">Test 555</h2>
			<p className="description">An info page that displays test 555.</p>
			<p className="message">{message}</p>

			<h3>Reports</h3>
			<ul>{reports.map(report => {
				return (
					<li>{report}</li>
				)
			})}</ul>

			<h3>Status</h3>
			<ul>
				<li>{config.status}</li>
				<li>{config.attempts}</li>
			</ul>
		</div>
	)
}

export default PageTest555;