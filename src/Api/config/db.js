const mariadb = require('mariadb');

const dbconfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10
};

const connection = mysql.createConnection(dbconfig);

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db', err.message);
        process.exit(1);
    }
    console.log('Connection established');
});

module.exports = connection;