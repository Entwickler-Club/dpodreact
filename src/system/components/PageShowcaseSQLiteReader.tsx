import { useState, useEffect } from 'react';
import '../styles/showcaseSQLiteReader.scss';
import * as config from '../config'; 

const backendPort = config.getBackendPort();

function PageShowcaseSQLiteReader() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/sqliteTest`)
			.then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
	}, []);


	return (
		<div className="page page_showcaseSQLiteReader">
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

export default PageShowcaseSQLiteReader;