import { useState } from 'react';
import '../styles/deletePage.scss';
import '../styles/dpodFormGeneric.scss';
import * as config from '../config';

const backendPort = config.getBackendPort();

function PageDeletePage() {
	const [message, setMessage] = useState('');
	const [pageTitle, setPageTitle] = useState('');
	const deletePage = () => {
		console.log('about to delete ' + pageTitle);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pageTitle })
		};
		fetch(`http://localhost:${backendPort}/deletePage`, requestOptions)
			.then(response => response.json());
	}

	const onPageTitleChange = (event: any) => {
		setPageTitle(event.target.value);
	}

	const closeMessage = () => {
		setMessage('');
	}

	return (
		<div className="page page_deletePage">
			<h2 className="title">Delete Page</h2>
			<p className="description">This page deletes a page from this website.</p>
			<form className="dpodFormGeneric">
				{message !== '' && (
					<div className="message" onClick={() => closeMessage()} dangerouslySetInnerHTML={{ __html: message }}></div>
				)}
				<div className="field dataType_choice field_dataType_choice_dropdown">
					<label htmlFor="pageTitle" className="fieldLabel">Page to Delete</label>
					<select onChange={e => onPageTitleChange(e)}>
						<option value="test111">Test 111</option>
						<option value="test222">Test 222</option>
						<option value="test333">Test 333</option>
					</select>
				</div>
				<div className="buttonArea">
					<button className="submitButton" type="button" onClick={e => deletePage()}>Delete Page</button>
				</div>
			</form>
		</div>
	)
}

export default PageDeletePage;