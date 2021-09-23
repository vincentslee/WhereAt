const router = require("express").Router();
const axios = require("axios");
let EventLocation = require('../models/event-location.models');


// Upload data to database
router.route('/add').post((req, res)=>{

});

// Get event data from database
router.route('/getEvent').get((req, res)=>{
    let event = req.body.event;
    EventLocation.findOne({event: event})
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))

});

// Get location data from database
router.route('/getLocation').get((req, res)=>{
    let location = req.body.location;
    EventLocation.findOne({location: location})
    .then(eventlocation => res.json(eventlocation))
    .catch(err => res.status(400).json('Error: ' + err))

});

module.exports = router;