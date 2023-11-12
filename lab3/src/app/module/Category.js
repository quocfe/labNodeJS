import connection from './../../config/connectdb.js';

const Category = {
	insert(data) {
		return new Promise((resolve, reject) => {
			const { nameCategory } = data;
			const sql = 'INSERT INTO catalog (nameCategory) VALUES (?)';
			const values = [nameCategory];
			connection.query(sql, values, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	},
	selectAll() {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM catalog;';
			connection.query(sql, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	},
	selectName(id) {
		return new Promise((resolve, reject) => {
			const sql = `SELECT nameCategory FROM labtest.catalog join labtest.products on labtest.catalog.idCategory = labtest.products.idCategory  WHERE 
labtest.catalog.idCategory = ${id};`;
			connection.query(sql, (error, resutl) => {
				if (error) {
					reject(error);
				} else {
					resolve(resutl);
				}
			});
		});
	},
};

export default Category;
