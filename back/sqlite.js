const sqlite3 = require("sqlite3").verbose();

let openedDatabases = {};

function checkData(data) {
  let regexp = RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);
  return new Promise((resolve, reject) => {
    if (regexp.test(data)) {
      resolve(data);
    } else {
      reject("Wrong email format");
    }
  });
}

function getDatabase(path) {
  return new Promise((resolve, reject) => {
    if (openedDatabases.hasOwnProperty(path)) {
      resolve(openedDatabases[path]);
    } else {
      openDatabase(path)
        .then(resolve)
        .catch(reject);
    }
  });
}

function openDatabase(path) {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(path, err => {
      if (err) reject(err);
    });

    db.on("open", () => {
      let runBinded = run.bind(null, db);
      openedDatabases[path] = {
        createTable: runBinded,
        dropTable: runBinded,
        insert: runBinded,
        select: all.bind(null, db),
        remove: runBinded,
        createTrigger: runBinded,
        dropTrigger: runBinded,
        isExistingTable: isExistingTable.bind(null, db)
      };

      resolve(openedDatabases[path]);
    });
  });
}

function run(db, query) {
  return new Promise((resolve, reject) => {
    db.run(query, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function all(db, query) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function isExistingTable(db, tableName) {
  let query = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}';`;
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows.length ? true : false);
    });
  });
}

module.exports.checkData = checkData;
module.exports.getDatabase = getDatabase;
