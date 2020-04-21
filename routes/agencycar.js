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
    check('couleur', 'Please enter the color').not().isEmpty(),
    check('image', 'Please enter the image').not().isEmpty(),
]], (req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const {modele, energie, téléphone, prix, couleur, image} = req.body
  const newCar = new Car ({        
                  modele,
                  energie,
                  prix,
                  couleur,
                  image,
                  téléphone,
                  user:req.user.id

              })

              newCar.save()
                    .then(car => res.json(car))
                    .catch(err => console.log(err.message))
})


router.delete('/:id', auth,(req, res) => {
    Car.findById(req.params.id)
    .then(car => {
        if(!car){
            return res.json({msg: 'Car not found!'})           
        }else if(car.user.toString() !== req.user.id){
            res.json({msg: 'Not authorized!'})
        }else{
         Car.findByIdAndDelete(req.params.id, (err, data) => {
             res.json({msg: "Car deleted!"})  
        })
    }
 })
         .catch(err => console.log(err.message))
 })
 

router.put('/:id',auth,(req, res) => {
const { modele, energie, téléphone, prix, couleur, image } = req.body

let carUpdate = {}
if(modele) carUpdate.modele = modele
if(energie) carUpdate.energie = energie
if (téléphone) carUpdate.téléphone = téléphone
if (prix) carUpdate.prix = prix
if (couleur) carUpdate.couleur = couleur
if (image) carUpdate.image = image

Car.findById(req.params.id)
   .then(car => {
       if(!car){
           return res.status(404).json({msg: 'Car not found!'})           
       }else if(car.user.toString() !== req.user.id){
           res.status(404).json({msg: 'Not authorized!'})
       }else{
        Car.findByIdAndUpdate(req.params.id, {$set: carUpdate}, (err, data) => {
            if(err) throw err
            res.status(404).json({msg: "Car updated!"})  
       })
   }
})
        .catch(err => console.log(err.message))
})
router.put("/api/:id",auth,(req,res)=>{
    Car.findByIdAndUpdate(req.params.id,{$push:{reservation:{
        fullname:req.body.fullname,
        email:req.body.email,
        téléphone:req.body.téléphone,
        startdate:req.body.startdate,
        enddate:req.body.enddate,

    }}},(err,data)=>{
        if(err) throw err
        res.json({msg:"car is reserved"})
    })
})

module.exports = router