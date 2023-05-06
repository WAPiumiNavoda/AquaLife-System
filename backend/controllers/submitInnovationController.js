const Innovations = require('../models/submitInnovationModel');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();


//Get Innovations controller
const getInnovation =  asyncHandler(
    async(req,res)=>{
        const innovations = await Innovations.find()
        res.json(innovations);
    }
)

//Create innovation controller
const  createInnovation = asyncHandler(async (req, res) => {
  const { innovationType,innovationTitle, innovationDes, innovationImage,innovationFile } = req.body;

  if (! innovationType || !innovationTitle || !innovationDes || !innovationImage || !innovationFile) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Innovation = new Innovations({ innovationType,innovationTitle, innovationDes, innovationImage,innovationFile });

    const createdInnovation = await Innovation.save();

    res.status(201).json(createdInnovation);
  }
});

//Get one innovations controller
const getInnovationById= asyncHandler(async (req,res)=>{
     const innovation= await Innovations.findById(req.params.id);

     if(innovation){
      res.json(innovation);
     }else{
      res.status(404).json({message: "Innovation Item is not found"});
     }
     res.json(innovation);
  }
)

//delete innovation controller
const deleteInnovation = asyncHandler(async (req, res) => {
  const innovation = await Innovations.findById(req.params.id);

  if ( innovation.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if ( innovation ) {
    await  innovation.remove();
    res.json({ message: "Innovation item is removed" });
  } else {
    res.status(404);
    throw new Error("This kind of innovation is not Found");
  }
});

const innovationApprove = asyncHandler(async (req, res) => {
try {
    const data = await Innovations.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    // Update the data with the approved status
    data.status = 'approved';
    await data.save();
    res.json({ message: 'Data approved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//approve innovations
router.post('/:id', async (req, res) => {
  
});



//export all functions
module.exports = {
     getInnovation,
     getInnovationById,
     createInnovation,
     innovationApprove
}