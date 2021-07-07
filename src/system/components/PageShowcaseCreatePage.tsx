import { useState, useEffect } from 'react';
import '../styles/showcaseCreatePage.scss';

function PageShowcaseCreatePage() {
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
			<h2 className="title">Showcase: Create Page</h2>
			<p className="description">An info page that displays showcase: create page.</p>
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

export default PageShowcaseCreatePage;