const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Briguy_131",
        database: "employees_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting to the Database: " + err.stack);
        return
    }
    console.log("Connected to the database");
});

module.exports = connection;