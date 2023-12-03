const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    
    async login(req, res) {
        
    }

    
    async chek(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не введений ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()