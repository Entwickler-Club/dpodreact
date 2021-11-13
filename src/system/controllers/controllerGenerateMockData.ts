/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import faker from 'faker';
import fs from 'fs';

class ControllerGenerateMockData extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_generateUsersJsonFile() {
		const howMany = this.getValue('howMany'); 
		const users: any[] = [];
		for (let x = 1; x <= howMany; x++) {
			users.push(faker.helpers.createCard());
		}
		const filePath = './public/output/json';
		const fileName = 'users.json';
		const physicalFilePathAndFileName = `${filePath}/${fileName}`;

		if (fs.existsSync(physicalFilePathAndFileName)) {
			fs.unlinkSync(physicalFilePathAndFileName);
		}
		const theJson = JSON.stringify(users, null, 4);
		fs.writeFile(physicalFilePathAndFileName, theJson, (err: any) => {
			if (err) {
				this.response.status(417).json({
					message: "error occurred, file not created",
					success: false
				});
			} else {
				this.response.status(201).json({
					message: `<div class="message">Download file with ${howMany} users: <code><a href="output/json/${fileName}" target="_blank">${fileName}</a></code></div><textarea spellCheck="false">${theJson}</textarea>`,
					success: true
				});
			}
		});
	}

}

export default ControllerGenerateMockData;
