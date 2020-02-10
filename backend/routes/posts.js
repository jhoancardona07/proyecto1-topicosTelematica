const express = require('express');
const router = express.Router();
const Data = require('../models/Data');
const verify = require('./verifyToken');

// Submit new data from the Sensor(Postman)
router.post('/', async (req, res) => {
    const data = new Data({
        email: req.body.email,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        latitude: req.body.latitude,
        altitude: req.body.altitude,
    });

    try{
    const savedData = await data.save()
    res.json(savedData);
    } catch (err) {
        res.json({ message: err });
    }
});

// Gets all the data
router.get('/', verify, async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch(err){
        res.json({ message: err });
    }
});


// Get an specific data
router.get('/:dataId', async (req, res) => {
    try {
        const data = await Data.findById(req.params.postId);
   res.json(data);
    } catch(err){
        res.json({ message: err });
    }
});

// Delete an specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removedData = await Data.remove({ _id: req.params.dataId });
        res.json(removedData);
    } catch (err){
        res.json({ message: err });
    }
})

// Update an specific post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedData = await Data.updateOne(
            { _id: req.params.dataId },
            { $set: {title: req.body.title }}
        );
        res.json(updatedData);
    } catch (err){
        res.json({ message: err });
    }
})

module.exports = router;