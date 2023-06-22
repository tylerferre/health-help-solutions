const express = require('express')
const nuresRouter = express.Router()
nuresRouter.use(express.json())
const NurseModel = require('../models/nurseModel.js')


// GET all
nuresRouter.get('/', (req, res, next) => {
    NurseModel.find((err, nurse) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(nurse)
    })
})

// GET one
nuresRouter.get('/:nurseId', (req, res, next) => {
    NurseModel.findOne({_id: req.params.nurseId}, (err, nurse)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(500).send(nurse)
    })
})

// Search by name
nuresRouter.get('/search/nurse', (req, res, next) => {
    const { nurse } = req.query
    const pattern = new RegExp(nurse)
    NurseModel.find({ firstName: { $regex: pattern, $options: 'i' } },
    (err, nurses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(nurses)
    })
})

// POST Request
nuresRouter.post('/', (req, res, next) => {
    const newNurse = new NurseModel(req.body)
    newNurse.save((err, nurse) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(nurse)
    })
})

//DELETE Request
nuresRouter.delete('/:nurseId', (req, res, next) => {
    NurseModel.findOneAndDelete({_id: res.params.nurseId}, (err, deletedNurse) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Removed ${deletedNurse.firstName} from database`)
    })
})

//PUT Request
nuresRouter.put('/:nurseId', (req, res, next) => {
    NurseModel.findOneAndUpdate(
        {_id: req.params.nurseId},
        req.body,
        {new: true},
        (err, updatedNurse) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNurse)
        }
    )
})

module.exports = nuresRouter