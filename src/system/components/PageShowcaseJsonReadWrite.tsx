import { useState, useEffect } from 'react';
import '../styles/showcaseJsonReadWrite.scss';
import * as config from '../config';

const backendPort = config.getBackendPort();


function PageShowcaseJsonReadWrite() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/controllerShowcaseJsonReadWrite`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				action: 'loadPageData',
				records
			})
		}).then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
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
					{records.map((record: any) => (
						<>
							<li>{record.id} - {record.title}</li>
						</>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PageShowcaseJsonReadWrite;