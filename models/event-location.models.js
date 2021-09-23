const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventLocationSchema = new Schema({
    event: { type: String, required: true, unique: true},
    amount: { type: Number, default: 0},
    location: { type: String, required: true }
    },
    {
        timestamps: true,
    });

const EventLocation = mongoose.model('Event-Location', EventLocationSchema);

module.exports = EventLocation;