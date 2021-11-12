/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

const main = async () => {
	await client.connect();
	const db = client.db('northwind');

	const products = await db.collection('products').find({ ProductName: /en/i })
		.project({
			ProductID: 1,
			ProductName: 1,
			_id: 0
		}).toArray();
	console.log(products);

	return 'done';
}

class ControllerShowcaseMongoDBDriverCRUD extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		main()
			.then(console.log)
			.catch(console.error)
			.finally(() => client.close());
		this.response.send({
			message: 'Welcome to this page.'
		});
	}

}

export default ControllerShowcaseMongoDBDriverCRUD;