import { useState } from 'react';
import '../styles/createPage.scss';
import * as config from '../config';
import * as qstr from '../qtools/qstr';

const backendPort = config.getBackendPort();

function PageCreatePage() {
	const [pageTitle, setPageTitle] = useState('');
	const [message, setMessage] = useState('');
	const [pageKindIdCode, setPageKindIdCode] = useState('pageWithSassFile');

	// useEffect(() => {
	// 	console.log('in effect');
	// 	setPageTitle('pageWithSassFile');
	// }, []);


	const createPage = (e: any) => {
		e.preventDefault();
		if (qstr.isEmpty(pageTitle)) {
			setMessage('Page title cannot be empty. Please type in a page title, e.g. <code>Quarterly Reports</code>');
		} else {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ pageTitle, pageKindIdCode })
			};

			const url = `http://localhost:${backendPort}/createPage`;

			const asyncCreatePage = async () => {
				const res = await fetch(url, requestOptions);
				const data = await res.json();
				if (data.info.error) {
					setMessage(data.info.error);
				}
			};

			asyncCreatePage();

		}
	}


	const onPageTitleChange = (e: any) => {
		setPageTitle(e.target.value);
	}

	const onPageKindIdCodeChange = (e: any) => {
		setPageKindIdCode(e.target.value);
	}

	const closeMessage = () => {
		setMessage('');
	}

	return (
		<div className="page page_createPage">
			<h2 className="title">Create Page</h2>
			<p className="description">Easily add a fully functioning page to this website</p>
			<form className="dpodFormGeneric">
				{message !== '' && (
					<div className="message" onClick={() => closeMessage()} dangerouslySetInnerHTML={{ __html: message }}></div>
				)}
				<div className="field dataType_line">
					<label htmlFor="pageTitle" className="fieldLabel">Page Title</label>
					<input type="text" autoFocus value={pageTitle} onChange={onPageTitleChange} />
					<div className="example">e.g. <code>Quarterly Reports</code></div>
				</div>
				<div className="field dataType_choice field_dataType_choice_radioButtons">
					<fieldset>
						<legend className="fieldLabel">Kind of Page</legend>
						<div className="radioChoice">
							<label>
								<input type="radio" className="radioControl" checked={pageKindIdCode === 'pageWithSassFile'} value="pageWithSassFile" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								<span className="title">page with SASS file</span>
								<span className="description">for simple pages that need no backend controller, don't load data from the backend, or that fetch data via the frontend</span>
							</label>
						</div>
						<div className="radioChoice">
							<label>
								<input type="radio" className="radioControl" value="pageWithSassFileAndController" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								<span className="title">page with SASS file and controller</span>
								<span className="description">for pages for which you need a backend controller, e.g. to get data from your local system (for a local website app) or if you need to access a local database, etc.</span>
							</label>
						</div>
						<div className="radioChoice">
							<label>
								<input type="radio" className="radioControl" value="pageWithSassFileControllerAndJsonFile" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								<span className="title">page with SASS file, controller and JSON file</span>
								<span className="description">for a page that will get its data from a local JSON file, good for local website apps where you modify the content of a JSON file which is then displayed on the page, or perhaps a JSON file that is exported from a database table, etc.</span>
							</label>
						</div>
					</fieldset>
				</div>
				<div className="buttonArea">
						<button className="submitButton" onClick={e => createPage(e)}>Create Page</button>
				</div>
			</form>
		</div>
	)
}

export default PageCreatePage;