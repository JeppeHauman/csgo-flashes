const mongoose = require( 'mongoose')

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
    } 
}, {collection: 'flashes'})

module.exports = mongoose.model('Flash', FlashSchema)