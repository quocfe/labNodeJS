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

const Product = {
	insert(data) {
		return executeQuery(
			'INSERT INTO products (nameProduct, sortDescription, images, description, priceProduct, authorProduct, idCategory) VALUES (?, ?, ?, ?, ?, ?, ?)',
			[
				data.nameProduct,
				data.sortDescription,
				data.images,
				data.description,
				data.priceProduct,
				data.authorProduct,
				data.idCategory,
			]
		);
	},

	selectAll() {
		return executeQuery('SELECT * FROM products;');
	},

	selectOne(object) {
		const key = Object.keys(object)[0];
		const value = object[key];

		return executeQuery(`SELECT * FROM products WHERE ${key} = ?`, [value]);
	},

	delete(id) {
		return executeQuery('DELETE FROM products WHERE idProduct = ?', [id]);
	},

	update(id, data) {
		return executeQuery(
			'UPDATE products SET nameProduct=?, sortDescription=?, images=?, description=?, priceProduct=?, authorProduct=?, idCategory=? WHERE idProduct=?',
			[
				data.nameProduct,
				data.sortDescription,
				data.images,
				data.description,
				data.priceProduct,
				data.authorProduct,
				data.idCategory,
				id,
			]
		);
	},
};

export default Product;
