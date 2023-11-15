const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/productdetail', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/productDetail.html')
    res.sendFile(htmlPath)
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

app.get('/products', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products.html'))
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/')
});
