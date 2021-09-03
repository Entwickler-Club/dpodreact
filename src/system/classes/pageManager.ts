import * as config from '../config';
const backendPort = config.getBackendPort();

class PageManager {
	async fetchPageDataFromController() {
		return new Promise(resolve => {
			fetch(`http://localhost:${backendPort}/controllerTestPage444`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					action: 'loadPageData'
				})
			}).then(response => response.json())
				.then((pageData: any) => {
					resolve(pageData);
				});
		});
	}
	static async loadDataFromController() : Promise<any> {
		return new Promise(resolve => {
			const pm = new PageManager();
			(async () => {
				resolve(await pm.fetchPageDataFromController());
			})();
		})
	}
}

export default PageManager;