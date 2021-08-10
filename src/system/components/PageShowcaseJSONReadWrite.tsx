import { useState, useEffect } from 'react';
import '../styles/showcaseJSONReadWrite.scss';
import * as config from '../config';

const backendPort = config.getBackendPort();


function PageShowcaseJSONReadWrite() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/jsonReadWrite`)
			.then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
	}, []);

	const saveData = () => {
		// records.splice(0,1);
		setRecords([...records.map((m: any) => {
			if (m.id === 10) {
				m.menu = 'CHANGED';
				m.title += '--added';
			}
			return m;
		})]);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ records })
		};
		fetch(`http://localhost:${backendPort}/jsonReadWrite`, requestOptions)
			.then(response => response.json());
	}

	return (
		<div className="page page_showcaseJSONReadWrite">
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

export default PageShowcaseJSONReadWrite;