const apiUserService = require('../../model/services/apiServices/apiUserService');

module.exports = {
    getAll: async (req, res) => {
        let users = await apiUserService.getAll()

        return res.json({
            meta: {
                status: 200,
                count: users.length,
            },
            users: users,
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