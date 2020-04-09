const express = require('express')
const router = express.Router()
const Car = require('../models/Car')


router.get('/',  (req, res) => {
    Car.find().sort({date:1})
       .then(cars=> res.json(cars))
       .catch(err => console.log(err.message))
})
module.exports = router