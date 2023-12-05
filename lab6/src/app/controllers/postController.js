import Product from './../models/Product.js';

const postControllers = {
	index: (req, res) => {
		res.render('post');
	},

	get: (req, res) => {
		res.status(200).json({
			posts: [{ title: 'First Post', content: 'This is the first post!' }],
		});
	},

	add: (req, res) => {
		try {
			let title = req.body.text;
			let content = req.body.body;

			res.status(201).json({
				message: 'Post created successfully!',
				post: { id: new Date().toISOString(), title: title, content: content },
			});
		} catch (error) {
			res.status(500).json(error);
		}
	},
};

export default postControllers;
