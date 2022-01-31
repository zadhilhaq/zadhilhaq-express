const router = require('express').Router()
const multer = require('multer')
const upload = multer({dest: 'uploads'})
const Product = require('./model')
const path = require('path')


router.post('/product'), (req, res)=>{
    const {users_id, name, price, stock} = req.body
    Product.create({users_id, name, price, stock})
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

router.get('/product', (req, res) =>{
    Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error))
})

module.exports = router