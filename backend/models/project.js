const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    ownerID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})  