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
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;
