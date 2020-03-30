const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Car = require('../models/Car')

// Get car
router.get('/', auth, (req, res) => {
    Car.find({user: req.user.id})
       .then(cars=> res.json(cars))
       .catch(err => console.log(err.message))
})

// Add car
router.post('/', (req, res) => {
    res.send('add car')
})

// Delete car
router.delete('/:id', (req, res) => {
    res.send('Delete car')
})

// Update car
router.put('/:id', (req, res) => {
    res.send('update car')
})

module.exports = router