import express from 'express';
import shopControllers from '../app/controllers/shopController.js';

const router = express.Router();

router.get('/:id', shopControllers.index);

export default router;
