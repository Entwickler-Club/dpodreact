/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../styles/showcaseNewsApi2.scss';
import PageManager from '../classes/pageManager';
import Loader from "react-loader-spinner";

function PageShowcaseNewsApi2() {
	const pageIdCode = 'showcaseNewsApi2';
	const [articles, setArticles] = useState([{}]);
	const pm = new PageManager(pageIdCode);

	useEffect(() => {
		pm.callAction('loadPageData').then((data: any) => {
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
		<div className="page page_showcaseNewsApi2">
			<h2 className="title">Showcase: News API</h2>
			<p className="description">This page that displays news from the News API.</p>
			<div className="articleArea">
				{articles.length > 1 && (
					<ul>
						{articles.map((article: any, index: number) => (
							<div key={index}>
								<li>{fixDate(article.publishedAt)} - <a href={article.url}>{article.title}</a></li>
							</div>
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

export default PageShowcaseNewsApi2;