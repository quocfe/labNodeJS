import listProduct from '../module/Category.js';
import Product from './../module/Product.js';

const shopControllers = {
	index: async (req, res) => {
		try {
			const id = req.params.id;
			const object = {
				idCategory: id,
			};

			const products = await Product.selectOne(object);

			res.status(200).render('shop', { products });
		} catch (error) {
			res.status(500).json(error);
		}
	},
};

export default shopControllers;
