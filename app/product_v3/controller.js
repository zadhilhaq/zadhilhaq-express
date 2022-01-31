const { ObjectId } = require('mongodb')
const db = require('../../config/mongodb')
const fs = require('fs')
const path = require('path')

const index = (req, res)=>{
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}
const view = (req, res)=>{
    const {id} = req.params
    db.collection('products').findOne({_id : ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}
const update = (req, res)=>{
    const {id} = req.params
    const {name, price, stock, status} = req.body
    // db.collection('products').updateOne({_id : ObjectId(id)})
    db.collection('products').updateOne({_id : ObjectId(id)},{$set: {name:name}})
    db.collection('products').updateOne({_id : ObjectId(id)},{$set: {price:price}})
    db.collection('products').updateOne({_id : ObjectId(id)},{$set: {stock:stock}})
    db.collection('products').updateOne({_id : ObjectId(id)},{$set: {status:status}})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

const store = (req, res)=>{
    const {name, price, stock, status} = req.body
      
        db.collection('products').insertOne({ name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error))
    
}
const hapus = async (req, res)=>{
    const {id} = req.params
    await db.collection('products').findOneAndDelete({_id : ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

module.exports = {
    index,
    view,
    store,
    hapus,
    update
}