/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import faker from 'faker';

faker.locale = 'de';

class ControllerShowcaseSampleDataWithFaker extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {

		// interesting as person represented as nested JSON object: 
		// const card = faker.helpers.createCard()
		// console.log(card);

		this.response.send([
			{
				label: "full name",
				data: faker.name.findName()
			},
			{
				label: "email",
				data: faker.internet.email()
			},
			{
				label: "HTML color",
				data: faker.commerce.color()
			},
			{
				label: "city",
				data: faker.address.city()
			},
			{
				label: "country",
				data: faker.address.country()
			},
			{
				label: "past iso date/time",
				data: faker.date.past()
			},
			{
				label: "future iso date/time",
				data: faker.date.past()
			},
			{
				label: "month",
				data: faker.date.month()
			},
			{
				label: "weekday",
				data: faker.date.weekday()
			},
			{
				label: "file Name",
				data: faker.system.fileName()
			}
		]);
	}

}

export default ControllerShowcaseSampleDataWithFaker;
