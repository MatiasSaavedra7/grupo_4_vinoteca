const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./public'));

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/productDetail.html')
    res.sendFile(htmlPath)
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/')
});