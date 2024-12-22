const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dangerSchema = new Schema( {
    category: {
        type: String,
        enum: ['animale-pericoloso', 'calamita-ambientale', 'sentiero-inagibile', 'altro'],
        required: true
    },
    //geoJSON?
    location: {
        type: {type: String},
        coordinates: [Number]
    },
    sendTimestamp: {type: Date, required: true},
    description: {type: String, required: true, maxLenght: 120}
})

module.exports = mongoose.model('Danger', dangerSchema);