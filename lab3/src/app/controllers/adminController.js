import Category from './../module/Category.js';
import Product from './../module/Product.js';

const adminController = {
	index: async (req, res) => {
		res.render('admin/home');
	},
	addview: async (req, res) => {
		const categorys = await Category.selectAll();
		res.render('admin/add', { categorys });
	},
	add: async (req, res) => {
		try {
			const file = req.file;
			let imageURL = `/uploads/${file.originalname}`;
			const product = {
				nameProduct: req.body.nameProduct,
				sortDescription: req.body.sortDescription,
				images: imageURL,
				description: req.body.description,
				priceProduct: req.body.priceProduct,
				authorProduct: req.body.authorProduct,
				idCategory: req.body.category,
			};
			await Product.insert(product);
			res.redirect('/admin/products')
			// res.status(200).json('add success');
		} catch (error) {
			res.status(500).json(error);
		}
	},
	list: async (req, res) => {
		const products = await Product.selectAll();
		res.render('admin/list', { products });
	},
	delete: async (req, res) => {
		const id = req.params.id;
		try {
			await Product.delete(id);
			const products = await Product.selectAll();

			res.status(200).render('admin/list', { products });
		} catch (error) {
			res.status(500).json(error);
		}
	},
	edit: async (req, res) => {
		try {
			const id = req.params.id;
			const categorys = await Category.selectAll();
			const product = await Product.selectOne({ idProduct: id });
			const categoryName = await Category.selectName(product[0].idCategory);

			const data = {
				product: product[0],
				categorys,
				categoryName: categoryName[0].nameCategory,
			};
			// res.json({ data });
			res.status(200).render('admin/edit', { data });
		} catch (error) {
			res.status(500).json(error);
		}
	},
	update: async (req, res) => {
		res.json(req.body);
		console.log('update')
		// try {
		// 	const file = req.file;
		// 	let imageURL = `/uploads/${file.originalname}`;
		// 	const product = {
		// 		nameProduct: req.body.nameProduct,
		// 		sortDescription: req.body.sortDescription,
		// 		images: imageURL,
		// 		description: req.body.description,
		// 		priceProduct: req.body.priceProduct,
		// 		authorProduct: req.body.authorProduct,
		// 		idCategory: req.body.category,
		// 	};
		// 	await Product.update(product);
		// 	res.status(200).json('add success');
		// } catch (error) {
		// 	res.status(500).json(error);
		// }
	},
};

export default adminController;
