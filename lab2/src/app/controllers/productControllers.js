import listProduct from '../module/Book.js';
import { v4 as uuidv4 } from 'uuid';

class productControllers {
	index(req, res) {
		res.render('product', { products: listProduct });
	}
	view(req, res) {
		res.render('addProduct');
	}
	add(req, res) {
		const file = req.file;
		const id = uuidv4();
		let title = req.body.productName;
		let price = req.body.price;
		let description = req.body.description;
		let imageURL = `/uploads/${file.originalname}`;

		const newBook = {
			id,
			title,
			price,
			description,
			imageURL,
		};

		listProduct.push(newBook);
		res.redirect('/product');
	}
	detail(req, res) {
		const product = listProduct.filter((el) => el.id == req.params.id);
		res.render('detailProduct', { product: product });
	}
}

export default new productControllers();
