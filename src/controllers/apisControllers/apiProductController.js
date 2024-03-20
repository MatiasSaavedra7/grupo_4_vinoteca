const apiProductService = require('../../model/services/apiServices/apiProductService');

module.exports = {
    getAllV2: async (req, res) => {
        let page = req.query.page ? Number(req.query.page) : 0;
        let limit = 10;
        let offset = limit * page;

        let products = await apiProductService.getAll(limit, offset)
        let countByCategory = await apiProductService.countByGrape();

        return res.json({
            meta: {
                status: 200,
                count: products.count,
                countByCategory: countByCategory,
                next: offset + limit < products.count ? `/api/products/?page=${page + 1}` : null,
                previous: page > 0 ? `/api/products/?page=${page - 1}` : null,
            },
            products: products.rows,
        })
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
        let product = await apiProductService.getById(req.params.id)

        return res.json({
            meta: {
                status: 200,
            },
            product: product,
        })
    },
}