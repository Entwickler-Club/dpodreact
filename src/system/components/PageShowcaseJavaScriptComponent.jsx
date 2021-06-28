import '../styles/showcaseJavaScriptComponent.scss';


function PageShowcaseJavaScriptComponent() {

	return (
		<div className="page page_showcaseJavaScriptComponent">
			<h2 className="title">Showcase: JavaScript Component</h2>
			<p className="description">This is a test of a JavaScript component.</p>	
			<p>To create a JavaScript component, create a TypeScript page first with <code>npm run dpod -- createPage --pageTitle "Test Page"</code> and then rename the component to .jsx, and then do a <code>npm start</code> again.</p>
		</div>
	)
}

export default PageShowcaseJavaScriptComponent;