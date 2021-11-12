/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/page_showcaseSampleDataWithFaker.scss';
import '../styles/dpod.scss';
import PageManager from '../classes/pageManager';

function PageShowcaseSampleDataWithFaker() {
	const pageIdCode = 'showcaseSampleDataWithFaker';
	const [fakeDataItems, setFakeDataItems] = useState([]);
	const pm = new PageManager(pageIdCode);

	const loadPageData = async () => {
		const data = await pm.loadPageData();
		setFakeDataItems(data);
	}

	useEffect(() => {
		loadPageData();
	}, []);

	return (
		<div className="page page_showcaseSampleDataWithFaker">
			<h2 className="title">Showcase: Sample Data with Faker</h2>
			<p className="description">This page shows how you can use the faker.js library to generate sample data.</p>
			<div className="buttonArea">
				<button className="dpod_button" onClick={() => loadPageData()}>Regenerate sample data</button>
			</div>
			<ul>
				{fakeDataItems.map((fakeDataItem: any, index) => {
					return (
						<li key={index}>{fakeDataItem.label}: <span className="theData">{fakeDataItem.data}</span></li>
					)
				})}
			</ul>
			<div className="infoArea dpod_labeledArea">
				<fieldset>
					<legend className="fieldLabel">Infos</legend>
					<ul>
						<li><a href="https://github.com/marak/Faker.js" target="_blank" rel="noreferrer">faker.js at GitHub</a></li>
					</ul>
				</fieldset>
			</div>
		</div>
	)
}

export default PageShowcaseSampleDataWithFaker;