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

  if (!innovationType || !innovationTitle || !innovationDes || !innovationImage || !innovationFile ) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Innovation = new Innovations({ innovationType,innovationTitle, innovationDes, innovationImage,innovationFile});

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


//approve innovations
const innovationApprove = asyncHandler(async (req, res) => {

  try {
    const innovation = await Innovations.findById(req.params.id);

    if (!innovation) {
      return res.status(404).json({ error: 'Innovation not found' });
    }

    innovation.IsApproved = true;

    await innovation.save();

    // Fetch all approved innovations
    const approvedInnovations = await Innovations.find({ IsApproved: true });

    res.json({
      message: 'Innovation Request Approved successfully!',
      approvedInnovations: approvedInnovations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
  
});

//deny innovations
const innovationDeny = asyncHandler(async (req, res) => {
try {
    const data = await Innovations.findById(req.params._id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    // Update the data with the denied status
    data.status = 'denied';
    await data.save();
    res.json({ message: 'Data denied successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

const innovationApproveList = asyncHandler(async(req, res)=>{
  //  try {
  //   const approvedData = await Innovations.find({ IsApproved:true });
  //   console.log(approvedData)
  //   res.json(approvedData);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Server Error' });
  // }

   Innovations.find({ IsApproved: false }, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(200).json(data);
  });
})    

//Update category controller
const UpdateInnovation = asyncHandler(async (req, res) => {
  const { innovationType,innovationTitle, innovationDes, innovationImage,innovationFile,IsApproved } = req.body;

  const inno = await Innovations.findById(req.params.id);

  // if (product.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Error("You can't perform this action");
  // }

  if (inno) {
   
    inno.innovationType =innovationType;
    inno.innovationTitle=innovationTitle;
    inno.innovationDes=innovationDes;
    inno.innovationImage=innovationImage;
    inno.innovationFile=innovationFile;
    inno.IsApproved=IsApproved;

    const updatedInnovation = await inno.save();
    res.json(updatedInnovation);
  } else {
    res.status(404);
    throw new Error("Innovation not found");
  }
});


//export all functions
module.exports = {
     getInnovation,
     getInnovationById,
     createInnovation,
     innovationApprove,
     innovationDeny,
     UpdateInnovation,
     innovationApproveList,
}