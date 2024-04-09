const apiProductService = require("../../model/services/apiServices/apiProductService");

module.exports = {
    getAll: async (req, res) => {
        //Capturo el número de página de la URL.
        let page = req.query.page ? Number(req.query.page) : 0;
        //Defino la cantidad de productos a mostrar por página.
        let limit = 10;
        //Calculo el offset
        let offset = limit * page;

        //Consultas a la base de datos.
        let products = await apiProductService.getAll(limit, offset, req.get('host'));
        let countByGrapes = await apiProductService.countByGrape();
        let countByCountries = await apiProductService.countByCountry();
        let lastProduct = await apiProductService.getLastProduct();

        //Respuesta en formato JSON.
        return res.json({
            meta: {
                status: 200,
                count: products.count,
                categories: {
                    grapes: countByGrapes,
                    countries: countByCountries,
                },
                next:
                    offset + limit < products.count
                        ? `http://${req.get('host')}/api/products/?page=${page + 1}`
                        : null,
                previous: page > 0 ? `http://${req.get('host')}/api/products/?page=${page - 1}` : null,
            },
            products: products.rows,
            lastProduct: lastProduct
        });
    },

    getById: async (req, res) => {
        let product = await apiProductService.getById(req.params.id);

        return res.json({
            meta: {
                status: 200,
            },
            product: product,
        });
    },
};
