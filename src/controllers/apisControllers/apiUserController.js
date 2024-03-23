const apiUserService = require('../../model/services/apiServices/apiUserService');

module.exports = {
    getAll: async (req, res) => {
        let page = req.query.page ? Number(req.query.page) : 0;
        let limit = 10;
        let offset = limit * page;

        let users = await apiUserService.getAll(limit, offset,req.get('host'))

        return res.json({
            meta: {
                status: 200,
                count: users.count,
                next: offset + limit < users.count ? `http://${req.get('host')}/api/users/?page=${page + 1}` : null,
                previous: page > 0 ? `http://${req.get('host')}/api/users/?page=${page - 1}` : null,
            },
            users: users.rows,
        })
    },

    getById: async (req, res) => {
        let user = await apiUserService.getById(req.params.id)

        return res.json({
            meta: {
                status: 200,
            },
            user: user,
        })
    },
}