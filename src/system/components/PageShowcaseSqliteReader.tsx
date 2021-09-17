/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/showcaseSqliteReader.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseSqliteReader() {
	const pageIdCode = 'showcaseSqliteReader';
	const [records, setRecords] = useState([{}]);
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setRecords([...data.records]);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseSqliteReader">
			<h2 className="title">Showcase: SQLite Reader</h2>
			<p className="description">An info page that displays showcase: SQLite reader.</p>
			<div className="recordArea">
				<ul>
					{records.map((record: any, index: number) => (
						<li key={index}>{record.id} - {record.message}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PageShowcaseSqliteReader;