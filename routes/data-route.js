const router = require("express").Router();
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

// Get data from database by events
router.route('/getEvents').get((req, res)=>{
    var event = req.query.event;
    EventLocation.find({
        event: event
    })
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))
});

// get data from database by location
router.route('/getLocations').get((req, res)=>{
    var location = req.query.location;
    EventLocation.find({
        location: location
    })
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;