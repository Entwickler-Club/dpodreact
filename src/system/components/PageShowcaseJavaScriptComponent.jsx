import { useContext } from 'react';
import ShowContext from '../../context/ShowContext.jsx';
import '../styles/page_showcaseJavaScriptComponent.scss';

function PageShowcaseJavaScriptComponent() {
	const { isShowing, setIsShowing } = useContext(ShowContext);

	return (
		<div className="page page_showcaseJavaScriptComponent">
			<div>isShowing: {isShowing.toString()}</div>
			<div><button onClick={() => setIsShowing(n => !n)}>Change isShowing</button></div>

			<h2 className="title">Showcase: JavaScript Component</h2>
			<p className="description">This is a test of a JavaScript component</p>	
			<p>To create a JavaScript component, simply rename the <code>.tsx</code> component to <code>.jsx</code>, and then do a <code>npm start</code> again.</p>
		</div>
	)
}

export default PageShowcaseJavaScriptComponent;