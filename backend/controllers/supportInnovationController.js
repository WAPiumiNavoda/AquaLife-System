const SupportInnovations = require('../models/supportInnovationModel');
const asyncHandler = require('express-async-handler');

//Get innovation support controller
 

//Create innovation support controller
const  createSupportInnovation = asyncHandler(async (req, res) => {
  const { suppotorName,suppotorEmail,supportorPhone, price } = req.body;

  if (! suppotorName || !suppotorEmail || !supportorPhone|| !price ) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const SupportInnovation = new SupportInnovations({ suppotorName,suppotorEmail,suppotorEmail,supportorPhone });

    const createdSupportInnovation = await SupportInnovation.save();

    res.status(201).json(createdSupportInnovation);
  }
});

//export all functions
module.exports = {
     createSupportInnovation
}