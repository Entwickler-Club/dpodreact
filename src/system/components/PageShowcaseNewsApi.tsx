import { useState, useEffect } from 'react';
import '../styles/showcaseNewsApi.scss';
import * as config from '../config';
import Loader from "react-loader-spinner";

const backendPort = config.getBackendPort();

function PageShowcaseNewsApi() {

	const [articles, setArticles] = useState([{}]);
	useEffect(() => {
		fetch(`http://localhost:${backendPort}/newsapi`)
			.then(response => response.json())
			.then((data: any) => {
				setArticles([...data.articles]);
			});
	}, []);

	const fixDate = (dateTime: string) => {
		if (!dateTime) return;
		let r = dateTime;
		r = r.replace('T', ' ');
		r = r.replace('Z', '');
		return r;
	}

	return (
		<div className="page page_showcaseNewsApi">
			<h2 className="title">Showcase: News API</h2>
			<p className="description">This page that displays news from the News API.</p>
			<div className="articleArea">
				{articles.length > 1 && (
					<ul>
						{articles.map((article: any) => (
							<>
								<li>{fixDate(article.publishedAt)} - <a href={article.url}>{article.title}</a></li>
							</>
						))}
					</ul>
				)}
				{articles.length === 1 && (
					<Loader
						type="Circles"
						color="#aaa"
						height={70}
						width={70}
						timeout={2000} 
					/>
				)}
			</div>
		</div>
	)
}

export default PageShowcaseNewsApi;