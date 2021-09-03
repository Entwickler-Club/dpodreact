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
import PageTest111 from './PageTest111';// ::test111
import PageTest222 from './PageTest222';// ::test222
import PageTest333 from './PageTest333';// ::test333
import PageTest444 from './PageTest444';// ::test444
import PageTest555 from './PageTest555';// ::test555
import PageTest666 from './PageTest666';// ::test666

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
<span><Link to='/test111'>Test 111</Link></span>{/* ::test111 */}
<span><Link to='/test222'>Test 222</Link></span>{/* ::test222 */}
<span><Link to='/test333'>Test 333</Link></span>{/* ::test333 */}
<span><Link to='/test444'>Test 444</Link></span>{/* ::test444 */}
<span><Link to='/test555'>Test 555</Link></span>{/* ::test555 */}
<span><Link to='/test666'>Test 666</Link></span>{/* ::test666 */}
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
<Route path='/test111'><PageTest111 /></Route>{/* ::test111 */}
<Route path='/test222'><PageTest222 /></Route>{/* ::test222 */}
<Route path='/test333'><PageTest333 /></Route>{/* ::test333 */}
<Route path='/test444'><PageTest444 /></Route>{/* ::test444 */}
<Route path='/test555'><PageTest555 /></Route>{/* ::test555 */}
<Route path='/test666'><PageTest666 /></Route>{/* ::test666 */}
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;