import Category from './../models/Category.js';

const categoryController = {
	add: async (req, res) => {
		try {
			let nameCategory = req.body.nameCategory;
			const newCate = {
				nameCategory,
			};

			await Category.insert(newCate);
			res.status(200).json('add success');
		} catch (error) {
			res.status(500).json(error);
		}
	},
};

export default categoryController;
