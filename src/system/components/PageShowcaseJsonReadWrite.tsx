/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/showcaseJsonReadWrite.scss';
import * as config from '../config';
import PageManager from '../classes/pageManager';

const backendPort = config.getBackendPort();

function PageShowcaseJsonReadWrite() {
	const pageIdCode = 'showcaseJsonReadWrite';
	const [records, setRecords] = useState([{}]);
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setRecords([...data.records]);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	const saveData = () => {
		setRecords([...records.map((m: any) => {
			if (m.id === 10) {
				m.menu = 'CHANGED';
				m.title += '--added222';
			}
			return m;
		})]);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ records, action: 'saveRecords' })
		};
		fetch(`http://localhost:${backendPort}/controllerShowcaseJsonReadWrite`, requestOptions)
			.then(response => response.json());
	}

	return (
		<div className="page page_showcaseJsonReadWrite">
			<h2 className="title">Showcase: JSON Manager</h2>
			<p className="description">A page that reads and and writes to JSON files via the backend.</p>
			<div className="controlPanel">
				<button className="saveDate" type="button" onClick={() => saveData()}>Save Data</button>
			</div>
			<div className="recordArea">
				<ul>
					{records.map((record: any, index: number) => (
						<div key={index}>
							<li>{record.id} - {record.title}</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PageShowcaseJsonReadWrite;