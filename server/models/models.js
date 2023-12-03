const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, unique: false}
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // category_id: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, unique: false}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketGoods = sequelize.define('basket_goods', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Category.hasMany(Products)
Products.belongsTo(Category)

Products.hasMany(BasketGoods)
BasketGoods.belongsTo(BasketGoods)

Basket.hasMany(BasketGoods)
BasketGoods.belongsTo(Basket)

module.exports = {
    User, 
    Basket, 
    BasketGoods, 
    Category, 
    Products
}