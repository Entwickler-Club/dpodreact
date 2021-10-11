import '../styles/page_showcaseReactIcons.scss';
import examples from '../data/json/page_reactIcons.json';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { ImDatabase } from 'react-icons/im';

function PageShowcaseReactIcons() {

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
			<div className="example">
				<div className="icon">
					<RiDeleteBin6Line />
				</div>
				<div className="info">
					<p><code>{examples[0].importLine}</code></p>
					<p><code>{examples[0].useLine}</code></p>
				</div>
			</div>

			<div className="example">
				<div className="icon">
					<GrEdit />
				</div>
				<div className="info">
					<p><code>{examples[1].importLine}</code></p>
					<p><code>{examples[1].useLine}</code></p>
				</div>
			</div>

			<div className="example">
				<div className="icon">
					<FiSettings />
				</div>
				<div className="info">
					<p><code>{examples[2].importLine}</code></p>
					<p><code>{examples[2].useLine}</code></p>
				</div>
			</div>

			<div className="example">
				<div className="icon">
					<ImDatabase />
				</div>
				<div className="info">
					<p><code>{examples[3].importLine}</code></p>
					<p><code>{examples[3].useLine}</code></p>
				</div>
			</div>

		</div>
	)
}

export default PageShowcaseReactIcons;