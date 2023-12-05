import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, res) {
		res(null, 'src/public/uploads');
	},
	filename: function (req, file, res) {
		res(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

export default upload;
