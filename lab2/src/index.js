import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// static file
app.use(express.static(path.join(__dirname, 'public')));
//

// template engine

app.engine(
	'hbs',
	engine({
		extname: '.hbs',
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

routes(app);

app.listen(port, () => {
	console.log(`listen port ${port}`);
});
