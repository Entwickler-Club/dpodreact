/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import faker from 'faker';
import fs from 'fs';
import path from 'path';

class ControllerGenerateMockData extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		this.response.send({
			message: 'Click a button to generate data. You can find the data in the /public directory of this site, or download it with the link.'
		});
	}

	action_generateUsersJsonFile() {
		// const user = faker.helpers.createCard()
		const users = [
			{
				firstName: "Timo"
			},
			{
				firstName: "Angelika"
			}
		];
		// this.response.status(201).json({
		// 	message: "testing",
		// 	success: true
		// });
		const rnum = Math.floor(Math.random() * 10000);
		users[1].firstName = rnum.toString();
		// const fileName = `./public/output/json/users${rnum}.json`;
		const fileName = `./public/output/json/users.json`;

		if (fs.existsSync(fileName)) {
			fs.unlinkSync(fileName);
		}
		fs.writeFile(fileName, JSON.stringify(users, null, 4), (err: any) => {
			if (err) {
				this.response.status(417).json({
					message: "error occurred, file not created",
					success: false
				});
			} else {
				this.response.status(201).json({
					message: "file created",
					success: true
				});
			}
		});
	}

}

export default ControllerGenerateMockData;
