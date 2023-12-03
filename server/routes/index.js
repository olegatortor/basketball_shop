const Router = require('express')
const router = new Router;

const categortRouter = require('./categortRouter')
const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/category', categortRouter)
router.use('/products', productsRouter)

module.exports = router