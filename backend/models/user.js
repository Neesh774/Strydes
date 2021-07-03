const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    projects: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema);