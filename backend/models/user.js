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
    },
    description: {
        type: String,
        required: false,
    },
    skills: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('User', UserSchema);