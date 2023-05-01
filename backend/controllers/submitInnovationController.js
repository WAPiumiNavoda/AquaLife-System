const Innovations = require('../models/submitInnovationModel');
const asyncHandler = require('express-async-handler');

//Get Innovations controller
const getInnovation =  asyncHandler(
    async(req,res)=>{
        const innovations = await Innovations.find()
        res.json(innovations);
    }
)

//Get one innovations controller
const getInnovationById= asyncHandler(async (req,res)=>{
     const innovation= await Innovations.findById(req.params.id);

     if(innovation){
      res.json(innovation);
     }else{
      res.status(404).json({message: "Innovation Item is not found"});
     }
     res.json(note);
  }
)

//export all functions
module.exports = {
     getInnovation,
     getInnovationById
}