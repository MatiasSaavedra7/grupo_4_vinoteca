const db = require("../database/models/Product");

function Product(data) {
    this.origin_id = data.origin_id;
    this.color_id = data.color_id;
    this.name = data.name;
    this.price = data.price;
    this.discount = data.discount;
    this.descripcion = data.descripcion;
    this.stock = data.stock;
}

const productService = {
    getAll: async () => {
        try {
            return await db.Product.findAll();
        } catch (e) {
            console.error(e);
            return [];
        }
    },

    getBy: async (id) => {
        try {
            return await db.Product.findByPk(id);
        } catch (e) {
            console.e(e);
        }
    },

    updateBy: async (id, data) => {
        try {
            return await db.Product.update(new Product(body), { where: { id: id } });
        } catch (e) {
            console.e(e);
        }
    },
    
    deleteBy: async (id) => {
        //Opcion 1:
        //Falta buscar las relaciones de este producto en las tablas intermedias y borrarlas antes de hacer 
        //el destroy

        //Opcion 2: borrarla logicamente
        try {
            return await db.Product.destroy({ where: { id: id } });
        } catch (e) {
            console.e(e);
        }
    },
}

module.exports = productService;