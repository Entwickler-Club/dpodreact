import { useState } from 'react';
import '../styles/showcaseSQLiteReader.scss';

function PageShowcaseSQLiteReader() {

	const [records] = useState([{ id: 1, message: "test message" }]);

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