const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    name: {type: String, required: true},
    surname: {type: String, required: true},
    cellphoneNumber: {type: String, required: true},
    password: {type: String, required: true},
    isModerator: {type: Boolean, required: true}
})

module.exports = mongoose.model('User', userSchema);