let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });

function startConnection(){  
    return connection;
}

function endConnection(connection){
    connection.end();
}

module.exports = {
    startConnection,
    endConnection
}