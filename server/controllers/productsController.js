const {Products} = require('../models/models')
const ApiError = require('../error/ApiError')
const { json } = require('sequelize')
const uuid = require('uuid')
const path = require('path')

class ProductsController {
    async create(req, res, next) {
        try {
            const {name, price, description, categoryId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const goods = await Products.create({name, price, description, categoryId, img: fileName})
    
            return res.json(goods)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    
    async getAll(req, res) {
        let {categoryId, page, limit} = req.query

        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit


        let categories;
        if(!categoryId) {
            categories = await Products.findAndCountAll({limit, offset})
        } else {
            categories = await Products.findAndCountAll({where: {categoryId}}, limit, offset)
        }
        return res.json(categories)
    }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const product = await Products.findOne(
    //         {
    //             where: {id},
    //             include
    //         }
    //     )
    // }
}

module.exports = new ProductsController()