import shopRoutes from './shop.js';
import categoryRoutes from './category.js';
import productRoutes from './product.js';
import siteRoutes from './site.js';
import adminRoutes from './admin.js';
import blogRoutes from './post.js';

function routes(app) {
	app.use('/admin', adminRoutes);
	app.use('/blog', blogRoutes);
	app.use('/shop', shopRoutes);
	app.use('/category', categoryRoutes);
	app.use('/product', productRoutes);
	app.use('/', siteRoutes);
}

export default routes;
