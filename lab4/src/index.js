import bodyParser from 'body-parser';
import express from 'express';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import connection from './config/connectdb.js';
import routes from './routes/index.js';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// static file
app.use(express.static(path.join(__dirname, 'public')));
//

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

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
	connection.connect((err) => {
		if (err) {
			console.log('Database disconnect', err);
		} else {
			console.log('Database connected');
		}
	});
});
