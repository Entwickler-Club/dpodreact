/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/deletePage2.scss';
import PageManager from '../classes/pageManager';

const pageIdCode = 'deletePage2';

function PageDeletePage2() {
	const [message, setMessage] = useState('');
	const [toDeletePageIdCode, setToDeletePageIdCode] = useState('');
	const pageManager = new PageManager(pageIdCode);

	useEffect(() => {
		pageManager.callControllerAction('loadPageData').then(data => {
			setMessage(data.message);
		});
	}, []);

	
	const deletePage = () => {
		pageManager.callControllerAction('deletePage', { test: 999}).then(data => {
			setMessage(data.message);
		});
	}

	const deletePageOLD = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ toDeletePageIdCode })
		};
		fetch(`${pageManager.getBackendBaseUrlPath()}deletePage`, requestOptions)
			.then(response => response.json());
	}

	const onPageIdCodeChange = (event: any) => {
		setToDeletePageIdCode(event.target.value);
	}

	const closeMessage = () => {
		setMessage('');
	}

	return (
		<div className="page page_deletePage2">
			<h2 className="title">Delete Page2</h2>
			<p className="description">This page deletes a page from this website.</p>
			<form className="dpodFormGeneric">
				{message !== '' && (
					<div className="message" onClick={() => closeMessage()} dangerouslySetInnerHTML={{ __html: message }}></div>
				)}
				<div className="field dataType_choice field_dataType_choice_dropdown">
					<label htmlFor="pageTitle" className="fieldLabel">Page to Delete</label>
					<select onChange={e => onPageIdCodeChange(e)}>
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

export default PageDeletePage2;