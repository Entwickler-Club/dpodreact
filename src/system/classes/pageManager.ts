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

	async callControllerAction(action: string): Promise<any> {
		return new Promise(resolve => {
			fetch(`${this.backendBaseUrlPath}controller${this.pageIdCodePascal}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					action
				})
			}).then(response => response.json())
				.then((data: any) => {
					resolve(data);
				});
		});
	}
}

export default PageManager;