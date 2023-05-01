const Innovations = require('../models/submitInnovationModel');
const asyncHandler = require('express-async-handler');

//Get Innovations controller
const getInnovation =  asyncHandler(
    async(req,res)=>{
        const innovations = await Innovations.find()
        res.json(innovations);
    }
)

//export all functions
module.exports = {
     getInnovation
}