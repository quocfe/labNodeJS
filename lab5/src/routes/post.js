import express from 'express';
import postControllers from './../app/controllers/postController.js';

const router = express.Router();

router.get('/posts', postControllers.get);
router.post('/post', postControllers.add);
router.get('/', postControllers.index);

export default router;
