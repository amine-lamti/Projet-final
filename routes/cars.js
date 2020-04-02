const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Car = require('../models/Car')


router.get('/', auth, (req, res) => {
    Car.find({user: req.user.id})
       .then(cars=> res.json(cars))
       .catch(err => console.log(err.message))
})


router.post('/', [auth, [
    check('modele', 'Please enter the model').not().isEmpty(),
    check('energie', 'Please enter type of energy').not().isEmpty(),
    check('téléphone', 'Please enter your number').not().isEmpty(),
    check('prix', 'Please enter the price').not().isEmpty(),
]], (req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const {modele, energie, téléphone, prix} = req.body
  const newCar = new Car ({        
                  modele,
                  energie,
                  prix,téléphone
              })

              newCar.save()
                    .then(car => res.json(car))
                    .catch(err => console.log(err.message))
})


router.delete('/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(car => {
        if(!car){
            return res.json({msg: 'Car not found!'})           
        }else if(music.user.toString() !== req.user.id){
            res.json({msg: 'Not authorized!'})
        }else{
         Car.findByIdAndDelete(req.params.id, {$set: carUpdate}, (err, data) => {
             res.json({msg: "Car deleted!"})  
        })
    }
 })
         .catch(err => console.log(err.message))
 })
 

router.put('/:id', (req, res) => {
const { modele, energie, téléphone, prix } = req.body

let carUpdate = {}
if(modele) carUpdate.modele = modele
if(energie) carUpdate.energie = energie
if (téléphone) carUpdate.téléphone = téléphone
if (prix) carUpdate.prix = prix

Car.findById(req.params.id)
   .then(car => {
       if(!car){
           return res.json({msg: 'Car not found!'})           
       }else if(music.user.toString() !== req.user.id){
           res.json({msg: 'Not authorized!'})
       }else{
        Car.findByIdAndUpdate(req.params.id, {$set: carUpdate}, (err, data) => {
            res.json({msg: "Car updated!"})  
       })
   }
})
        .catch(err => console.log(err.message))
})

module.exports = router