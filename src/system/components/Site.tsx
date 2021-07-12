import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowContext from '../../context/ShowContext.jsx';
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';

// DYNAMIC_CODE_AREA: loadPageComponentLines
import PageShowcaseCounterUsingState from './PageShowcaseCounterUsingState'; // ::showcaseCounterUsingState
import PageShowcaseLodash from './PageShowcaseLodash'; // ::showcaseLodash
import PageShowcaseTypeScriptClasses from './PageShowcaseTypeScriptClasses';// ::showcaseTypeScriptClasses
import PageShowcaseJavaScriptComponent from './PageShowcaseJavaScriptComponent';// ::showcaseJavaScriptComponent
import PageShowcaseSQLiteReader from './PageShowcaseSQLiteReader';// ::showcaseSQLiteReader
import PageShowcaseCreatePage from './PageShowcaseCreatePage';// ::showcaseCreatePage
import PageCreatePage from './PageCreatePage';// ::createPage
import PageDeletePage from './PageDeletePage';// ::deletePage

function Site() {
	const { isShowing, setIsShowing } = useContext(ShowContext);

	const showHandler = () => {
		setIsShowing((prevIsShowing: boolean) => !prevIsShowing);
	};

	return (
		<Router>
			<div className='app_site'>
				<h1 className='siteTitle'>Info Site</h1>
				<nav>
					<ul>
						<li>
							<label htmlFor='myToggle' className='toggle'>
								<input
									className='toggle_input'
									type='checkbox'
									id='myToggle'
									checked={isShowing}
									onChange={showHandler}
								/>
								<div className='toggle_fill'></div>
							</label>
						</li>
						<li>
							<Link to='/'>Home</Link>
						</li>
						{isShowing && (
							<>
{/* DYNAMIC_JSX_AREA: linkPageComponentLines */}
<li><Link to='/showcaseCounterUsingState'>Showcase: Counter Using State</Link></li> {/* ::showcaseCounterUsingState */}
<li><Link to='/showcaseLodash'>Showcase: Lodash</Link></li> {/* ::showcaseLodash */}
<li><Link to='/showcaseTypeScriptClasses'>Showcase: TypeScript Classes</Link></li>{/* ::showcaseTypeScriptClasses */}
<li><Link to='/showcaseJavaScriptComponent'>Showcase: JavaScript Component</Link></li>{/* ::showcaseJavaScriptComponent */}
<li><Link to='/showcaseSQLiteReader'>Showcase: SQLite Reader</Link></li>{/* ::showcaseSQLiteReader */}
<li><Link to='/showcaseCreatePage'>Showcase: Create Page</Link></li>{/* ::showcaseCreatePage */}
<li><Link to='/createPage'>Create Page</Link></li>{/* ::createPage */}
<li><Link to='/deletePage'>Delete Page</Link></li>{/* ::deletePage */}
							</>
						)}
					</ul>
				</nav>

				<section className='app_container'>
					<Switch>
						<Route exact path='/'>
							<PageHome />
						</Route>
{/* DYNAMIC_JSX_AREA: routePageComponentLines */}
<Route path='/showcaseCounterUsingState'><PageShowcaseCounterUsingState /></Route> {/* ::showcaseCounterUsingState */}
<Route path='/showcaseLodash'><PageShowcaseLodash /></Route> {/* ::showcaseLodash */}
<Route path='/showcaseTypeScriptClasses'><PageShowcaseTypeScriptClasses /></Route>{/* ::showcaseTypeScriptClasses */}
<Route path='/showcaseJavaScriptComponent'><PageShowcaseJavaScriptComponent /></Route>{/* ::showcaseJavaScriptComponent */}
<Route path='/showcaseSQLiteReader'><PageShowcaseSQLiteReader /></Route>{/* ::showcaseSQLiteReader */}
<Route path='/showcaseCreatePage'><PageShowcaseCreatePage /></Route>{/* ::showcaseCreatePage */}
<Route path='/createPage'><PageCreatePage /></Route>{/* ::createPage */}
<Route path='/deletePage'><PageDeletePage /></Route>{/* ::deletePage */}
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;