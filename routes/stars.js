let router = require('express').Router()
let Stars = require('../models/star')

//get all 
router.get('/', (req, res, next) => {
  Stars.find({})
    .then(stars => {
      return res.send(stars)
    })
    .catch(err => {
      return next(err)
    })
})

//get one
router.get('/:id', (req, res, next) => {
  Stars.findById(req.params.id)
    .then(star => res.send(star))
    .catch(next)
})

//create one
router.post('/', (req, res, next) => {
  Stars.create(req.body)
    .then(star => res.send(star))
    .catch(next)
})

//edit one
router.put('/:id', (req, res, next) => {
  Stars.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
  Stars.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'successfully removed star'
    }))
    .catch(next)
})

module.exports = router