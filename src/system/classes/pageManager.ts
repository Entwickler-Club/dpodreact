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

	async callControllerAction(action: string): Promise<any> {
		return new Promise(resolve => {
			(async () => {
				resolve(await this.fetchPageDataFromController());
			})();
		})
	}
}

export default PageManager;