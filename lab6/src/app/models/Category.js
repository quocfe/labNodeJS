import connection from './../../config/connectdb.js';

function executeQuery(sql, values = []) {
	return new Promise((resolve, reject) => {
		connection.query(sql, values, (error, results) => {
			if (error) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});
}

const Category = {
	insert(data) {
		const { nameCategory } = data;
		return executeQuery('INSERT INTO catalog (nameCategory) VALUES (?)', [
			nameCategory,
		]);
	},

	selectAll() {
		return executeQuery('SELECT * FROM catalog;');
	},

	selectName(id) {
		return executeQuery(
			'SELECT nameCategory FROM labtest.catalog JOIN labtest.products ON labtest.catalog.idCategory = labtest.products.idCategory WHERE labtest.catalog.idCategory = ?;',
			[id]
		);
	},
};

export default Category;
