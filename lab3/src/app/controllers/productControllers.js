import listProduct from '../module/Category.js';
import Product from './../module/Product.js';

const productControllers = {
	index: (req, res) => {
		res.render('product');
	},
	view: (req, res) => {
		res.render('addProduct');
	},
	add: (req, res) => {
		try {
			// const file = req.file;
			let nameProduct = req.body.nameProduct;
			let sortDescription = req.body.sortDescription;
			let images = req.body.images;
			let description = req.body.description;
			let priceProduct = req.body.priceProduct;
			let authorProduct = req.body.authorProduct;
			let idCategory = req.body.idCategory;
			// let imageURL = `/uploads/${file.originalname}`;

			const newProduct = {
				nameProduct,
				sortDescription,
				images,
				description,
				priceProduct,
				authorProduct,
				idCategory,
			};

			Product.insert(newProduct);
			res.status(200).json('add product success');
			// res.redirect('/product');
		} catch (error) {
			res.status(500).json(error);
		}
	},
	detail: (req, res) => {
		const product = listProduct.filter((el) => el.id == req.params.id);
		res.render('detailProduct', { product: product });
	},
};

export default productControllers;
