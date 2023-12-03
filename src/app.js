//Sección de Requerimiento de Módulos
const express = require('express');
const path = require('path');
const app = express();

//Sección de Configuración de Carpeta de Archivos Estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));


//Sección de Configuración de Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Sección de Requerimiento de Rutas
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

//Sección de Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);


//Sección de levantar el Server
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/')
});