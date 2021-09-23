const router = require("express").Router();
//const axios = require("axios");
let EventLocation = require('../models/event-location.models');


// Create new event
router.route('/add').post((req, res)=>{
    let event = req.body.event;
    let location = req.body.location;
    EventLocation.findOneAndUpdate(
    // Filter
    {
        event: event,
        location: location
    }, 
    // Update
    {
        // Increments amount field by 1
        $inc: {
            amount: 1
        } 
    },
    // Params
    {
        // If none is found, create new document
        upsert: true
    })
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))

});

// Get event data from database
router.route('/getEvent').get((req, res)=>{
    let event = req.body.event;
    EventLocation.find({event: event})
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))

});

// Get location data from database
router.route('/getLocation').get((req, res)=>{
    let location = req.body.location;
    EventLocation.find({location: location})
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;