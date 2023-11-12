import connection from './../../config/connectdb.js';

const Product = {
	insert(data) {
		return new Promise((resolve, reject) => {
			const {
				nameProduct,
				sortDescription,
				images,
				description,
				priceProduct,
				authorProduct,
				idCategory,
			} = data;
			const sql =
				'INSERT INTO products (nameProduct, sortDescription, images, description, priceProduct, authorProduct, idCategory) VALUES (?, ?, ?, ?, ?, ?, ?)';
			const values = [
				nameProduct,
				sortDescription,
				images,
				description,
				priceProduct,
				authorProduct,
				idCategory,
			];
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
			const sql = 'SELECT * FROM products;';
			connection.query(sql, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	},
	selectOne(object) {
		return new Promise((resolve, reject) => {
			for (let key in object) {
				if (object.hasOwnProperty(key)) {
					let value = object[key];
					const sql = `SELECT * FROM products where ${key} = ${value}`;
					connection.query(sql, (error, results) => {
						if (error) {
							reject(error);
						} else {
							resolve(results);
						}
					});
				}
			}
		});
	},
	delete(id) {
		return new Promise((resolve, reject) => {
			const sql = `DELETE FROM products WHERE idProduct = ${id}`;
			connection.query(sql, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	},
	update(id) {
			return new Promise((resolve, reject) => {
			const {
				nameProduct,
				sortDescription,
				images,
				description,
				priceProduct,
				authorProduct,
				idCategory,
			} = data;
			const sql =
            'UPDATE products SET nameProduct=?, sortDescription=?, images=?, description=?, priceProduct=?, authorProduct=?, idCategory=? WHERE idProduct=?';
			const values = [
				nameProduct,
				sortDescription,
				images,
				description,
				priceProduct,
				authorProduct,
				idCategory,
			];
			connection.query(sql, values, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}
};

export default Product;
