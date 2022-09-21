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
    getFlashesMap: async (req,res) => {
        try {
            const flashes = await Flash.find({map: req.params.map})
            console.log(flashes)
            // res.render('../maps/' + req.params.map +'.ejs', {flashes: flashes})
            res.render('flashes.ejs', {flashes: flashes})
        } catch (err) {
            console.log(err)
        }
    }
    
}