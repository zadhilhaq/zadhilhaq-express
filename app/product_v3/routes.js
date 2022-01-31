const router = require('express').Router()
const productController = require('./controller')


router.get('/product', productController.index)
router.get('/product/:id', productController.view)
router.put('/product/:id', productController.update)
router.post('/product', productController.store)
router.delete('/product/:id', productController.hapus)

module.exports = router