import express from 'express';
import adminController from '../app/controllers/adminController.js';
import upload from './../helper/upload.js';

const router = express.Router();

router.get('/products', adminController.list);
//
router.put('/products/:id', adminController.update);
// 
router.get('/products/edit/:id', adminController.edit);
//
router.delete('/products/:id', adminController.delete);
//
router.get('/add', adminController.addview);
//
router.post('/add', upload.single('uploadImg'), adminController.add);
//
router.get('/', adminController.addview);

export default router;
