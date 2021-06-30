const sqlite3 = require('sqlite3').verbose();
 
class SqliteManager {
    dbPathAndFileName;
 
    constructor(dbPathAndFileName) {
        this.dbPathAndFileName = dbPathAndFileName;
    }
 
    getRecordWithSql(sql) {
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this.dbPathAndFileName);
            db.all(sql, function (err, records) {
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
 
    getRecordsWithSql(sql) {
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this.dbPathAndFileName);
            db.all(sql, function (err, records) {
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
 
module.exports = SqliteManager;