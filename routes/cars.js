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
router.post('/', [auth, [
    check('firstname', 'Please enter your first name').not().isEmpty(),
    check('lastname', 'Please enter your last name').not().isEmpty(),
]], (req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const { firstname, lastname } = req.body
  const newCar = new Car ({        
                  firstname,
                  lastname
              })

              newCar.save()
                    .then(car => res.json(car))
                    .catch(err => console.log(err.message))
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