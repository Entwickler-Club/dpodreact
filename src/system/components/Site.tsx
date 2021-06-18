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

function Site() {

	return (
		<div className="app_site">
			<h1 className="siteTitle">Info Site</h1>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>

				<section className="app_container">
					<Switch>
						<Route path="/">
							<PageHome />
						</Route>
					</Switch>
				</section>
			</Router>
		</div >
	)
}

export default Site;