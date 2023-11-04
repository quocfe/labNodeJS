import homeControllers from '../app/controllers/homeControllers.js';
import productControllers from '../app/controllers/productControllers.js';

function routes(app) {
	app.use('/product', productControllers.index);
	app.use('/', homeControllers.index);
}

export default routes;
