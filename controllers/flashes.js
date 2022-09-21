const Flash = require('../models/Flash')

module.exports = {
    getFlashes: async (req,res)=> {
        try {
            const flashItems = await Flash.find()
            res.render('flashes.ejs', {flashes: flashItems})
        } catch (err) {
            console.log(err)
        }
    },
    
}