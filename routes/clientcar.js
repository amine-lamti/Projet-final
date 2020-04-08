const express = require('express')
const router = express.Router()
const Car = require('../models/Car')
const auth = require('../middleware/auth')


router.get('/', auth, (req, res) => {
    Car.find()
       .then(cars=> res.json(cars))
       .catch(err => console.log(err.message))
})
module.exports = router