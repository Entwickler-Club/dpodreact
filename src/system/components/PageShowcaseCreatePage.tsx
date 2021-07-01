import { useState, useEffect } from 'react';
import '../styles/showcaseCreatePage.scss';

function PageShowcaseCreatePage() {
	const [pageTitle, setPageTitle] = useState('');
	useEffect(() => {
	}, []);
	const createPage = () => {
		setPageTitle('changed');
		fetch('http://localhost:5001/sqliteTest')
			.then(response => response.json())
			.then((data: any) => {
				console.log(data);
			});
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
			[{pageTitle}]
		</div>
	)
}

export default PageShowcaseCreatePage;