const mongoose = require('mongoose')

const FlashSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true,
    },
    ctFlash: {
        type: Boolean,
        required: true,
    },
    desc: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Flash', FlashSchema)