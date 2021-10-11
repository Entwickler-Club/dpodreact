import '../styles/page_showcaseReactIcons.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';

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
					<p><code>import { RiDeleteBin6Line } from 'react-icons/ri';</code></p>
				</div>
			</div>
		</div>
	)
}

export default PageShowcaseReactIcons;