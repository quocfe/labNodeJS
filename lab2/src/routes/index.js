import productRoutes from './product.js';
import siteRoutes from './site.js';

function routes(app) {
	app.use('/product', productRoutes);
	app.use('/', siteRoutes);
}

export default routes;
