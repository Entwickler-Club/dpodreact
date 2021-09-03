import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowContext from '../../context/ShowContext.jsx';
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';

// DYNAMIC_CODE_AREA: loadPageComponentLines
import PageShowcaseCounterUsingState from './PageShowcaseCounterUsingState'; // ::showcaseCounterUsingState
import PageShowcaseTypeScriptClasses from './PageShowcaseTypeScriptClasses';// ::showcaseTypeScriptClasses
import PageShowcaseJavaScriptComponent from './PageShowcaseJavaScriptComponent';// ::showcaseJavaScriptComponent
import PageShowcaseSqliteReader from './PageShowcaseSqliteReader';// ::showcaseSqliteReader
import PageCreatePage from './PageCreatePage';// ::createPage
import PageDeletePage from './PageDeletePage';// ::deletePage
import PageShowcaseJsonReadWrite from './PageShowcaseJsonReadWrite';// ::showcaseJsonReadWrite
import PageShowcaseNewsApi from './PageShowcaseNewsApi';// ::showcaseNewsApi
import PageTestPage666 from './PageTestPage666';// ::testPage666

function Site() {
	const { isShowing, setIsShowing } = useContext(ShowContext);

	const showHandler = () => {
		setIsShowing((prevIsShowing: boolean) => !prevIsShowing);
	};

	return (
		<Router>
			<div className='app_site'>
				<div className="topHeader">
					<h1 className='siteTitle'>Info Site</h1>
					<div className='menuToggle'>
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
					</div>
				</div>
				<nav>
					<span>
						<Link to='/'>Home</Link>
					</span>
					<span><Link to='/createPage'>Create Page</Link></span>{/* ::createPage */}
					<span><Link to='/deletePage'>Delete Page</Link></span>{/* ::deletePage */}
					{isShowing && (
						<>
{/* DYNAMIC_JSX_AREA: linkPageComponentLines */}
<span><Link to='/showcaseCounterUsingState'>Showcase: Counter Using State</Link></span> {/* ::showcaseCounterUsingState */}
<span><Link to='/showcaseTypeScriptClasses'>Showcase: TypeScript Classes</Link></span>{/* ::showcaseTypeScriptClasses */}
<span><Link to='/showcaseJavaScriptComponent'>Showcase: JavaScript Component</Link></span>{/* ::showcaseJavaScriptComponent */}
<span><Link to='/showcaseSqliteReader'>Showcase: SQLite Reader</Link></span>{/* ::showcaseSqliteReader */}
<span><Link to='/showcaseJsonReadWrite'>Showcase: JSON Read/Write</Link></span>{/* ::showcaseJsonReadWrite */}
<span><Link to='/showcaseNewsApi'>Showcase: News Api</Link></span>{/* ::showcaseNewsApi */}
<span><Link to='/testPage666'>Test Page 666</Link></span>{/* ::testPage666 */}
						</>
					)}
				</nav>

				<section className='app_container'>
					<Switch>
						<Route exact path='/'>
							<PageHome />
						</Route>
						<Route path='/createPage'><PageCreatePage /></Route>{/* ::createPage */}
						<Route path='/deletePage'><PageDeletePage /></Route>{/* ::deletePage */}
{/* DYNAMIC_JSX_AREA: routePageComponentLines */}
<Route path='/showcaseCounterUsingState'><PageShowcaseCounterUsingState /></Route> {/* ::showcaseCounterUsingState */}
<Route path='/showcaseTypeScriptClasses'><PageShowcaseTypeScriptClasses /></Route>{/* ::showcaseTypeScriptClasses */}
<Route path='/showcaseJavaScriptComponent'><PageShowcaseJavaScriptComponent /></Route>{/* ::showcaseJavaScriptComponent */}
<Route path='/showcaseSqliteReader'><PageShowcaseSqliteReader /></Route>{/* ::showcaseSqliteReader */}
<Route path='/showcaseJsonReadWrite'><PageShowcaseJsonReadWrite /></Route>{/* ::showcaseJsonReadWrite */}
<Route path='/showcaseNewsApi'><PageShowcaseNewsApi /></Route>{/* ::showcaseNewsApi */}
<Route path='/testPage666'><PageTestPage666 /></Route>{/* ::testPage666 */}
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;