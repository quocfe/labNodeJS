import express from 'express';
import homeControllers from '../app/controllers/homeControllers.js';

const router = express.Router();

router.get('/', homeControllers.index);

export default router;
