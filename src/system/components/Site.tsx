import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowContext from '../../context/ShowContext.jsx';
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';
import PageShowcaseCounterUsingState from './PageShowcaseCounterUsingState';
import PageShowcaseTest from './PageShowcaseTest';

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
							<li>
								<Link to='/showcaseCounterUsingState'>Showcase: Counter Using State</Link>
								<Link to='/showcaseTest'>Showcase: Test</Link>
							</li>
						)}
					</ul>
				</nav>

				<section className='app_container'>
					<Switch>
						<Route exact path='/'>
							<PageHome />
						</Route>
						<Route path='/showcaseCounterUsingState'><PageShowcaseCounterUsingState /></Route>
						<Route path='/showcaseTest'><PageShowcaseTest/></Route>
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;
