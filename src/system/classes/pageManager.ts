import * as config from '../config';
import * as qstr from '../qtools/qstr';
const backendPort = config.getBackendPort();

class PageManager {
	
	private pageIdCode = '';
	private pageIdCodePascal = '';
	private backendBaseUrlPath = '';

	constructor(pageIdCode: string) {
		this.pageIdCode = pageIdCode;
		this.pageIdCodePascal = qstr.forcePascalNotation(this.pageIdCode);
		this.backendBaseUrlPath = `http://localhost:${backendPort}/`;
	}

	getBackendBaseUrlPath() {
		return this.backendBaseUrlPath;
	}

	async fetchPageDataFromController() {
		return new Promise(resolve => {
			fetch(`${this.backendBaseUrlPath}controller${this.pageIdCodePascal}`, {
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

	// TODO: remove
	static async loadDataFromController(pageIdCode: string): Promise<any> {
		return new Promise(resolve => {
			const pm = new PageManager(pageIdCode);
			(async () => {
				resolve(await pm.fetchPageDataFromController());
			})();
		})
	}

	async loadDataFromController(pageIdCode: string): Promise<any> {
		return new Promise(resolve => {
			const pm = new PageManager(pageIdCode);
			(async () => {
				resolve(await pm.fetchPageDataFromController());
			})();
		})
	}
}

export default PageManager;