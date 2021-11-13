/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import faker from 'faker';
import fs from 'fs';

class ControllerGenerateMockData extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_generateUsersJsonFile() {
		const howMany = 3;
		const users = [];
		for (let x = 1; x <= howMany; x++) {
			users.push(faker.helpers.createCard());
		}
		const filePath = './public/output/json';
		const fileName = 'users.json';
		const physicalFilePathAndFileName = `${filePath}/${fileName}`;

		if (fs.existsSync(physicalFilePathAndFileName)) {
			fs.unlinkSync(physicalFilePathAndFileName);
		}
		fs.writeFile(physicalFilePathAndFileName, JSON.stringify(users, null, 4), (err: any) => {
			if (err) {
				this.response.status(417).json({
					message: "error occurred, file not created",
					success: false
				});
			} else {
				this.response.status(201).json({
					message: `Download file: <code><a href="output/json/${fileName}">${fileName}</a></code>`, 
					success: true
				});
			}
		});
	}

}

export default ControllerGenerateMockData;
