import { useState, useEffect } from 'react';
import '../styles/showcaseSQLiteReader.scss';

function PageShowcaseSQLiteReader() {

	const [records, setRecords] = useState([{ id: 1, message: "test message" }]);
	console.log('1111');
	useEffect(() => {
		fetch('http://localhost:5001/sqliteTest')
			.then(response => response.json())
			.then(data => {
				console.log(data);
			});
		setRecords([...records, ...[{ id: 999, message: 'nnn2' }]]);
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