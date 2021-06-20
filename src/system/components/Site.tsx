import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowcaseContext from '../../context/ShowcaseContext.jsx';
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';
import PageShowcaseCounterUsingState from './PageShowcaseCounterUsingState';

function Site() {
	const { isShowcase, setIsShowcase } = useContext(ShowcaseContext);

	const showcaseHandler = () => {
		setIsShowcase((prevIsShowcase: boolean) => !prevIsShowcase);
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
									checked={isShowcase}
									onChange={showcaseHandler}
								/>
								<div className='toggle_fill'></div>
							</label>
						</li>
						<li>
							<Link to='/'>Home</Link>
						</li>
						{isShowcase && (
							<li>
								<Link to='/showcaseCounterUsingState'>
									Showcase: Counter Using State
								</Link>
							</li>
						)}
					</ul>
				</nav>

				<section className='app_container'>
					<Switch>
						<Route exact path='/'>
							<PageHome />
						</Route>
						<Route path='/showcaseCounterUsingState'>
							<PageShowcaseCounterUsingState />
						</Route>
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;
