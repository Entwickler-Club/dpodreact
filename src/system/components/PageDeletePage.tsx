import { useState, useEffect } from 'react';
import '../styles/deletePage.scss';

function PageDeletePage() {
	const [pageTitle, setPageTitle] = useState('');
	const deletePage = () => {
		setPageTitle('');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pageTitle })
		};
		fetch('http://localhost:5001/deletePage', requestOptions)
			.then(response => response.json());
	}

	const onPageTitleChange = (event: any) => {
		setPageTitle(event.target.value);
	}

	return (
		<div className="page page_deletePage">
			<h2 className="title">Delete Page</h2>
			<p className="description">This page deletes a page from this website.</p>
			<form>
				<label htmlFor="pageTitle">Page to delete: </label>
				<input className="pageTitle" type="text" value={pageTitle} onChange={onPageTitleChange} id="pageTitle" />
				<button className="submitButton" type="button" onClick={() => deletePage()}>Submit</button>
			</form>
		</div>
	)
}

export default PageDeletePage;