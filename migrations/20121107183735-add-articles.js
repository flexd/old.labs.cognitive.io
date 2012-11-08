var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('articles', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true},
      title: {type: 'string', notNull: true},
      date: {type: 'datetime', notNull: true},
      body: {type: 'text', notNull: true}
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db, callback) {
  dropTable('articles', {
    ifExists: true
  }, callback);
};
