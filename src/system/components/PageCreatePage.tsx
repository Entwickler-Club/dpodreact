import { useState, useEffect } from 'react';
import '../styles/createPage.scss';

function PageCreatePage() {
	const [pageTitle, setPageTitle] = useState('');
	const [records, setRecords] = useState<any[]>([]);
	useEffect(() => {
		console.log(records);
	}, []);
	const createPage = () => {
		setPageTitle('changed');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pageTitle })
		};
		fetch('http://localhost:5001/createPage', requestOptions)
			.then(response => response.json())
			.then((data: any) => setRecords([...data.records]));
	}

	const onPageTitleChange = (event: any) => {
		setPageTitle(event.target.value);
	}

	return (
		<div className="page page_showcaseCreatePage">
			<h2 className="title">Create Page</h2>
			<p className="description">This page creates a fully functioning page for this website.</p>
			<form>
				<label htmlFor="pageTitle">Page Title</label>
				<input type="text" value={pageTitle} onChange={onPageTitleChange} id="pageTitle" />
				<button type="button" onClick={() => createPage()}>Submit</button>
			</form>
			<div>[{pageTitle}]</div>
			<div>[{records.length}]</div>
		</div>
	)
}

export default PageCreatePage;