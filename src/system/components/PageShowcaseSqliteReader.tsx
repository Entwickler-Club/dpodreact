import { useState, useEffect } from 'react';
import '../styles/showcaseSqliteReader.scss';
import * as config from '../config'; 

const backendPort = config.getBackendPort();

function PageShowcaseSqliteReader() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/controllerShowcaseSqliteReader`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				action: 'loadPageData'
			})
		}).then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
	}, []);


	return (
		<div className="page page_showcaseSqliteReader">
			<h2 className="title">Showcase: SQLite Reader</h2>
			<p className="description">An info page that displays showcase: SQLite reader.</p>
			<div className="recordArea">
				<ul>
					{records.map((record: any) => (
						<>
							<li>{record.id} - {record.message}</li>
						</>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PageShowcaseSqliteReader;