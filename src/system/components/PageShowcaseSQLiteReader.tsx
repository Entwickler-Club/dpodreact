import { useState, useEffect } from 'react';
import '../styles/showcaseSQLiteReader.scss';

function PageShowcaseSQLiteReader() {

	const [records, setRecords] = useState([{}]);
	console.log('1111');
	useEffect(() => {
		fetch('http://localhost:5001/sqliteTest')
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