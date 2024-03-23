const apiProductService = require("../../model/services/apiServices/apiProductService");

module.exports = {
    getAllV2: async (req, res) => {
        let page = req.query.page ? Number(req.query.page) : 0;
        let limit = 10;
        let offset = limit * page;

        let products = await apiProductService.getAll(limit, offset, req.get('host'));
        let countByGrapes = await apiProductService.countByGrape();
        let countByCountries = await apiProductService.countByCountry();

        console.log(countByGrapes.include);

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
        });
    },

    // getAll: async (req, res) => {
    //     let products = await apiProductService.getAll()
    //     let countByCategory = await apiProductService.countByGrape();

    //     return res.json({
    //         meta: {
    //             status: 200,
    //             count: products.count,
    //             countByCategory: countByCategory
    //         },
    //         products: products.rows,
    //     })
    // },

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
