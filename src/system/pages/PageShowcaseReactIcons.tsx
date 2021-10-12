import React from 'react';
import '../styles/page_showcaseReactIcons.scss';
import iconDataLines from '../data/json/page_reactIcons.json';
import { GrEdit } from 'react-icons/gr';
import * as qstr from '../qtools/qstr';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { FiSettings } from 'react-icons/fi';
// import { ImDatabase } from 'react-icons/im';

import * as GrIcons from 'react-icons/gr';

function PageShowcaseReactIcons() {

	iconDataLines.forEach((iconDataLine: string) => {
		const [familyIdCode, iconName, title, keywords] = qstr.breakIntoParts(iconDataLine, ';');
		console.log(iconName);
	})
	const icon = React.createElement((GrIcons as any)['GrEdit']);

	return (
		<div className="page page_showcaseReactIcons">
			<h2 className="title">Showcase: React-Icons</h2>
			<p className="description">Information and examples for using React-Icons</p>
			<h3>Information</h3>
			<ul>
				<li>React-Icons have already been installed in Datapod with <code>npm i react-icons</code></li>
				<li><a target="_blank" href="https://react-icons.github.io/react-icons/search?q=lightning">search for react-icons here</a> </li>
				<li><a target="_blank" href="https://onespace.netlify.app/howtos?id=373">small React-Icon howto</a></li>
			</ul>
			<h3>Examples</h3>
			{/* <div className="example">
				<div className="icon">
					<RiDeleteBin6Line />
				</div>
				<div className="info">
					<p><code>{examples[0].importLine}</code></p>
					<p><code>{examples[0].useLine}</code></p>
				</div>
			</div> */}
		</div>
	)
}

export default PageShowcaseReactIcons;