import { useState, useEffect } from 'react';
import '../styles/showcaseSQLiteReader.scss';

function PageShowcaseSQLiteReader() {

	const [records, setRecords] = useState([{ id: 1, message: "test message" }]);

	useEffect(() => {
		setRecords([...records, ...[{ id: 999, message: 'nnn' }]]);
	}, []);

	// fetch('https://hplussport.com/api/products/order/price')
	// .then(response => response.json())
	// .then(data => {
	//     this.products = data;
	// })

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