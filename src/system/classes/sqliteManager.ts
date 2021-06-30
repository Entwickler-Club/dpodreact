const sqlite3 = require('sqlite3').verbose();
 
class SqliteManager {
    dbPathAndFileName;
 
    constructor(dbPathAndFileName: string) {
        this.dbPathAndFileName = dbPathAndFileName;
    }
 
    getRecordWithSql(sql: string) {
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this.dbPathAndFileName);
            db.all(sql, function (err: object, records: any[]) {
                if (records === undefined) {
                    reject(err);
                } else if (records.length === 0) {
                    resolve(null);
                } else {
                    resolve(records[0]);
                }
            });
            db.close();
        });
    }
 
    getRecordsWithSql(sql: string) {
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this.dbPathAndFileName);
            db.all(sql, function (err: object, records: any[]) {
                if (records === undefined) {
                    reject(err);
                } else if (records.length === 0) {
                    resolve([]);
                } else {
                    resolve(records);
                }
            });
            db.close();
        });
    }
}
 
export default SqliteManager;