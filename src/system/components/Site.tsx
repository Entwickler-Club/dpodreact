import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';
import PageShowcaseCounterUsingState from "./PageShowcaseCounterUsingState";

function Site() {

	return (
		<Router>
			<div className="app_site">
				<h1 className="siteTitle">Info Site</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/showcaseCounterUsingState">Showcase: Counter Using State</Link>
						</li>
					</ul>
				</nav>

				<section className="app_container">
					<Switch>
						<Route exact path="/">
							<PageHome />
						</Route>
						<Route path="/showcaseCounterUsingState">
							<PageShowcaseCounterUsingState />
						</Route>
					</Switch>
				</section>
			</div >
		</Router>
	)
}

export default Site;