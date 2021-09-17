/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/deletePage.scss';
import PageManager from '../classes/pageManager';

const pageIdCode = 'deletePage';

function PageDeletePage() {
	const [message, setMessage] = useState('');
	const [deletePageIdCode, setDeletePageIdCode] = useState('test111');
	const [pageItems, setPageItems] = useState<any[]>([]);

	const pm = new PageManager(pageIdCode);

	useEffect(() => {
		pm.callAction('loadPageData').then((data: any) => {
			setMessage(data.message);
			setPageItems([...data.pageItems]);
		});
	}, []);


	const deletePage = () => {
		pm.callAction('deletePage', { deletePageIdCode }).then(data => {
			setMessage(data.message);
		});
	}

	const onPageIdCodeChange = (event: any) => {
		setDeletePageIdCode(event.target.value);
	}

	const closeMessage = () => {
		setMessage('');
	}

	return (
		<div className="page page_deletePage">
			<h2 className="title">Delete Page2</h2>
			<p className="description">Delete a page from this website</p>
			<form className="dpodFormGeneric">
				{message !== '' && (
					<div className="message" onClick={() => closeMessage()} dangerouslySetInnerHTML={{ __html: message }}></div>
				)}
				<div className="field dataType_choice field_dataType_choice_dropdown">
					<label htmlFor="pageTitle" className="fieldLabel">Page to Delete</label>
					<select value={deletePageIdCode} onChange={e => onPageIdCodeChange(e)}>
						{pageItems.map((pageItem, index) => {
							return (
								<option value={pageItem.idCode}>{pageItem.title}</option>
							)
						})}
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