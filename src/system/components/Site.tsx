import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';

function Site() {

	return (
		<div className="app_site">
			<h1 className="siteTitle">Info Site</h1>
			<section className="app_container">
				<PageHome/>
			</section>
		</div>
	)
}

export default Site;