import { useState, useEffect } from 'react';
import '../styles/showcaseJSONReadWrite.scss';

function PageShowcaseJSONReadWrite() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch('http://localhost:5001/jsonReadWrite')
			.then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
	}, []);

	return (
		<div className="page page_showcaseJSONReadWrite">
			<h2 className="title">Showcase: JSON Manager</h2>
			<p className="description">A page that reads and and writes to JSON files via the backend.</p>
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