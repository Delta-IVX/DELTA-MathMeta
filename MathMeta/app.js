require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const equationsRoutes = require('./routes/equations');

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'publuc')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', equationsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`MathMeta rodando na porta ${PORT}`);
});