import { useState, useEffect } from 'react';
import '../styles/showcaseJSONManager.scss';

function PageShowcaseJSONManager() {

	const [records, setRecords] = useState([{}]);
	useEffect(() => {
		fetch('http://localhost:5001/jsonManager')
			.then(response => response.json())
			.then((data: any) => {
				setRecords([...data.records]);
			});
	}, []);


	return (
		<div className="page page_showcaseJSONManager">
			<h2 className="title">Showcase: JSON Manager</h2>
			<p className="description">A page that reads and and writes to JSON files via the backend.</p>
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

export default PageShowcaseJSONManager;