const Flash = require('../models/Flash')

module.exports = {
    getIndex: async (req,res) => {
        try {
            const flashItems = await Flash.find()
            res.render('index.ejs', {flashes: flashItems})
        } catch (err) {
            console.log(err)
        }
    }
}