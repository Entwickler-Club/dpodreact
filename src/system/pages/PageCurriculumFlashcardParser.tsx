/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../styles/page_curriculumFlashcardParser.scss';
import '../styles/dpodFormGeneric.scss';
import PageManager from '../classes/pageManager';

function PageCurriculumFlashcardParser() {
	const pageIdCode = 'curriculumFlashcardParser';
	const [sourceText, setSourceText] = useState('');
	const [targetText, setTargetText] = useState('');
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		// const data = await pm.loadPageData();
	}

	const handleFieldChange_sourceText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setSourceText(e.target.value);	
	}

	useEffect(() => {
		loadPageData();
	}, []);


	const parseText = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const data = await pm.callAction('parseText', { sourceText });
		setTargetText(data.targetText);
	}

	return (
		<>
			<div className="page page_curriculumFlashcardParser">
				<h2 className="title">Curriculum Flashcard Parser</h2>
				<p className="description">Convert a list of flashcards into the JSON equivalent to paste into Curriculum JSON file.</p>
			</div>
			<form className="dpodFormGeneric">
				<div className="field dataType_paragraph">
					<label htmlFor="sourceText" className="fieldLabel">Source Text</label>
					<textarea id="sourceText" autoFocus onChange={handleFieldChange_sourceText} />
					<div className="example">e.g.<br/><div className="content"><code>What is the capital of England?<br/>&nbsp;&nbsp;London<br/><br/>What is the capital of France?<br/>&nbsp;&nbsp;Paris</code></div></div>
				</div>
				<div className="field dataType_paragraph readOnly">
					<label htmlFor="targetText" className="fieldLabel">Target Text</label>
					<textarea id="targetText" value={targetText} readOnly autoFocus onChange={handleFieldChange_sourceText} />
				</div>
				<div className="buttonArea">
					<button className="submitButton" onClick={parseText}>Parse</button>
				</div>
			</form>
		</>
	)
}

export default PageCurriculumFlashcardParser;