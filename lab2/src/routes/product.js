import express from 'express';
import productControllers from '../app/controllers/productControllers.js';
import upload from './../helper/upload.js';

const router = express.Router();

router.get('/id=:id', productControllers.detail);
router.post('/add', upload.single('uploadImg'), productControllers.add);
router.get('/add', productControllers.view);
router.get('/', productControllers.index);

export default router;
