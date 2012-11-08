var restify = require('restify');
var Logger = require('bunyan');
var check = require('validator').check,
    sanitize = require('validator').sanitize

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'labs',
  password : 'omgwtfbbq2012!@#$%^',
  database : 'labs_dev',
});

connection.connect();
function handleDisconnect(connection) {
  connection.on('error', function(err) {
    if (!err.fatal) {
      return;
    }

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
      throw err;
    }

    console.log('Re-connecting lost connection: ' + err.stack);

    connection = mysql.createConnection(connection.config);
    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(connection);

// Setup bits
var server = restify.createServer();
server.use(restify.bodyParser());

// Handle stuff
//
server.get('/article', getArticle);

function getArticle(req, res, next) {
  connection.query('SELECT * FROM articles ORDER BY date DESC', function (err, rows, fields) {
    if (err) {
      return next(new restify.InternalError(err));
    }
    else {  
      res.send(rows);
    }
  });
}

// Now listen! (fairy voice from zelda is now in your head!)

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
server.on('after', restify.auditLogger({
  log: new Logger({
    name: 'audit',
    stream: process.stdout
  })
}));
