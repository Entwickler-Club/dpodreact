/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/deletePage2.scss';
import PageManager from '../classes/pageManager';

function PageDeletePage2() {
	
	const [message, setMessage] = useState('');
	
	useEffect(() => {
		PageManager.loadDataFromController('deletePage2').then(data => {
			setMessage(data.message);
			});
	}, []);

	return (
		<div className="page page_deletePage2">
			{/* <h2 className="title">Delete Page2</h2>
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
			</form> */}
		</div>
	)
}

export default PageDeletePage2;