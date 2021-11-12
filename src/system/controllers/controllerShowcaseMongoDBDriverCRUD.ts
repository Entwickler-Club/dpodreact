/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

const getData = async (callback: any) => {
	await client.connect();
	const db = client.db('northwind');
	callback(db);
}

class ControllerShowcaseMongoDBDriverCRUD extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		getData(async (db: any) => {
			const products = await db.collection('products').find({ ProductName: /en/i })
				.project({
					ProductID: 1,
					SupplierID: 1,
					ProductName: 1,
					_id: 0
				}).toArray();
			this.response.send({
				message: products.length
			});
		});
	}

	// action_loadPageData() {
	// 	const getData = async ((db:any) => {
	// 	const products = await db.collection('products').find({ ProductName: /en/i })
	// 		.project({
	// 			ProductID: 1,
	// 			ProductName: 1,
	// 			_id: 0
	// 		}).toArray();
	// 	console.log(products);
	// this.response.send({
	// 	message: 'Welcome to this page.'
	// });
	// });
	// getData()
	// 	.then(console.log)
	// 	.catch(console.error)
	// 	.finally(() => client.close());
}

export default ControllerShowcaseMongoDBDriverCRUD;