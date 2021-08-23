import { useState, useEffect } from 'react';
import '../styles/createPage.scss';
import * as config from '../config';

const backendPort = config.getBackendPort();

function PageCreatePage() {
	const [pageTitle, setPageTitle] = useState('');
	const [pageKindIdCode, setPageKindIdCode] = useState('pageWithSassFile');

	// useEffect(() => {
	// 	console.log('in effect');
	// 	setPageTitle('pageWithSassFile');
	// }, []);

	const createPage = () => {
		console.log('front');
		setPageTitle('');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pageTitle })
		};
		fetch(`http://localhost:${backendPort}/createPage`, requestOptions)
			.then(response => response.json());
	}

	const onPageTitleChange = (e: any) => {
		setPageTitle(e.target.value);
	}

	const onPageKindIdCodeChange = (e: any) => {
		setPageKindIdCode(e.target.value);
	}

	return (
		<div className="page page_createPage">
			<h2 className="title">Create Page</h2>
			<p className="description">This page creates a fully functioning page for this website.</p>
			<form>
				<div className="row">
					<label htmlFor="pageTitle">Page Title: </label>
					<input className="pageTitle" type="text" value={pageTitle} onChange={onPageTitleChange} id="pageTitle" />
				</div>
				<div className="row">
					<div className="radioChoice">
						<label>
							<input type="radio" checked={pageKindIdCode === 'pageWithSassFile'} value="pageWithSassFile" name="pageKindIdCode" onClick={e => onPageKindIdCodeChange(e)} />
							page with SASS file
						</label>
					</div>
					<div className="radioChoice">
						<label>
							<input type="radio" value="pageWithSassFileAndController" name="pageKindIdCode" onClick={e => onPageKindIdCodeChange(e)} />
							page with SASS file and controller
						</label>
					</div>
					<div className="radioChoice">
						<label>
							<input type="radio" value="pageWithSassFileControllerAndJsonFile" name="pageKindIdCode" onClick={e => onPageKindIdCodeChange(e)} />
							page with SASS file, controller and JSON file
						</label>
					</div>
				</div>
				<div className="row">
					<div className="row">
						<button className="submitButton" type="button" onClick={() => createPage()}>Submit</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default PageCreatePage;