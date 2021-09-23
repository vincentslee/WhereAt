const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventLocationSchema = new Schema({

    // identical entries will be identified by identical event-location pairs, if an entry is duplicate then the amount counter will go
    // up by one. This schema layout allows users to search both by events and by locations efficiently, but the downside is there
    // is less protection against cluttering via duplicate but non identical entries. This will be mitigated with SOME parsing but 
    // this most likely will not eliminate this drawback
    event: {type: String, required: true},
    locations: {type: String, require: true},
    amount: {type: Number, default: 0},

    },
    {
        timestamps: true,
    });

const EventLocation = mongoose.model('Event-Location', EventLocationSchema);

module.exports = EventLocation;