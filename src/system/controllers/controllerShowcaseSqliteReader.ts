import Controller from './controller';
import SqliteManager from '../classes/sqliteManager';

class ControllerShowcaseSqliteReader extends Controller {

	action_loadPageData() {
		const sqliteManager = new SqliteManager('./src/system/data/main.sqlite');
		sqliteManager.getRecordsWithSql(`SELECT * FROM messages`)
			.then((records: any) => {
				this.response.send({
					records
				});
			})
			.catch((error: any) => console.log(error));
	}


}

export default ControllerShowcaseSqliteReader;