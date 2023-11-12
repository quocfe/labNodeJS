import Product from '../module/Product.js';

const homeControllers = {
	index: async (req, res) => {
		const products = await Product.selectAll();
		return res.render('home', { products: products });
	},
};

export default homeControllers;
