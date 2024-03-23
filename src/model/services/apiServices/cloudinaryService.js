require('dotenv').config();
const path = require('path');
const multer = require('multer');
const { error } = require('console');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//*Versión para subir imagenes mediante un path (Usamos multer para guardar la imagen en una carpeta)
function uploadImage(img, id) {
    const pathImg = path.resolve(__dirname, `../../../../public/images/users/${img}`)
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(pathImg,
            { public_id: `user/${id}` },
            function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
}

//*Versión para subir imagenes guardadas en memoria local (Usamos multer para guardar la imagen en memoria local)
function uploadImgBuffer(buffer, folder) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { resource_type: 'image', folder: folder},
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            }
        ).end(buffer); // Aquí pasamos los datos binarios de la imagen al stream
    })
}


module.exports = { uploadImage, uploadImgBuffer };