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
		if (!qstr.isEmpty(pageTitle)) {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ pageTitle, pageKindIdCode })
			};

			const url = `http://localhost:${backendPort}/createPage`;

			// Promise
			// fetch(url, requestOptions)
			// 	.then(response => {
			// 		response.json().then((data) => {
			// 			setMessage(data.info.error);
			// 		});
			// 	});

			// async/await
			const asyncCreatePage = async () => {
				const res = await fetch(url, requestOptions);
				const data = await res.json();
				setMessage(data.info.error);
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
			<p className="description">This page creates a fully functioning page for this website.</p>
			<form>
				{message !== '' && (
					<div className="message" onClick={() => closeMessage()}>{message}</div>
				)}
				<div className="row dataType_line">
					<label htmlFor="pageTitle" className="rowLabel">Page Title</label>
					<input type="text" autoFocus value={pageTitle} onChange={onPageTitleChange} />
				</div>
				<div className="row">
					<fieldset>
						<legend className="rowLabel">Kind of Page</legend>
						<div className="radioChoice">
							<label>
								<input type="radio" checked={pageKindIdCode === 'pageWithSassFile'} value="pageWithSassFile" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								page with SASS file
							</label>
						</div>
						<div className="radioChoice">
							<label>
								<input type="radio" value="pageWithSassFileAndController" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								page with SASS file and controller
							</label>
						</div>
						<div className="radioChoice">
							<label>
								<input type="radio" value="pageWithSassFileControllerAndJsonFile" name="pageKindIdCode" onChange={e => onPageKindIdCodeChange(e)} />
								page with SASS file, controller and JSON file
							</label>
						</div>
					</fieldset>
				</div>
				<div className="row">
					<div className="row">
						<button className="submitButton" onClick={e => createPage(e)}>Create Page</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default PageCreatePage;