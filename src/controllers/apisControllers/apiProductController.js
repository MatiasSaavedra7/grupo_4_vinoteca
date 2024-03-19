const apiProductService = require('../../model/services/apiServices/apiProductService');

module.exports = {
    getAll: async (req, res) => {
        let products = await apiProductService.getAll()
        let countByCategory = await apiProductService.countByGrape();

        return res.json({
            meta: {
                status: 200,
                count: products.count,
                countByCategory: countByCategory
            },
            products: products.rows,
        })
    },

    getById: async (req, res) => {
        let user = await apiProductService.getById(req.params.id)

        return res.json({
            meta: {
                status: 200,
            },
            user: user,
        })
    },
}