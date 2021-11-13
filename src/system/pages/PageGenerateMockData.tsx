/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_generateMockData.scss';
import PageManager from '../classes/pageManager';

function PageGenerateMockData() {
	const pageIdCode = 'generateMockData';
	const [message, setMessage] = useState('');
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setMessage(data.message);
	}

	const generateUsersJsonFile = async () => {
		const data = await pm.callAction('generateUsersJsonFile');
		setMessage(data.message);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_generateMockData">
			<h2 className="title">Generate Mock Data</h2>
			<p className="description">An info page that displays generate mock data</p>
			<p className="message dpod_p">{message}</p>
			<div className="dpod_p buttonArea">
				<button className="dpod_button" onClick={() => generateUsersJsonFile()}>Generate users.json</button>
			</div>

			<div className="infoArea dpod_labeledArea dpod_hide">
				<fieldset>
					<legend className="fieldLabel">Infos</legend>
					<ul>
						<li>Issue: nodemon restarts when JSON files are created</li>
						<li>Ok, it seems that only when a file is overwritten that nodemone restarts. And then node will restart as well (!).</li>
						<li>So one solution is to always create new files, e.g. with a random number in file name.</li>
						<li>Testing: delete file first, that seems to work.</li>
						<li>So, it turns out that if you delete the file first, then create it, the server won't reload.</li>
						<li>I left this Stack Overflow question to see if it resolves why writing to a file that is already there restarts both nodemon and node: <a href="https://stackoverflow.com/questions/69952574/nodemon-json-file-restarts-nodemon-regardless-of-watch-ignore-ext-settings" target="_blank" rel="noreferrer">How to get nodemon from restarting when JSON files are created</a></li>
					</ul>
				</fieldset>
			</div>


		</div>
	)
}

export default PageGenerateMockData;