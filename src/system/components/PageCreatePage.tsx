import { useState} from 'react';
import '../styles/createPage.scss';

function PageCreatePage() {
	const [pageTitle, setPageTitle] = useState('');
	const createPage = () => {
		setPageTitle('');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pageTitle })
		};
		fetch('http://localhost:5001/createPage', requestOptions)
			.then(response => response.json());
	}

	const onPageTitleChange = (event: any) => {
		setPageTitle(event.target.value);
	}

	return (
		<div className="page page_createPage">
			<h2 className="title">Create Page</h2>
			<p className="description">This page creates a fully functioning page for this website.</p>
			<form>
				<label htmlFor="pageTitle">Page to create: </label>
				<input className="pageTitle" type="text" value={pageTitle} onChange={onPageTitleChange} id="pageTitle" />
				<button className="submitButton" type="button" onClick={() => createPage()}>Submit</button>
			</form>
		</div>
	)
}

export default PageCreatePage;