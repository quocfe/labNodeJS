import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	database: 'labtest',
	user: 'root',
	password: '123456',
});

export default connection;
