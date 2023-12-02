const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')

app.use(express.static('../public'));

app.use('/', mainRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/')
});