import express from 'express';
import categoryController from '../app/controllers/categoryController.js';

const router = express.Router();

router.post('/add', categoryController.add);

export default router;
