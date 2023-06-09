const SupportInnovations = require('../models/supportInnovationModel');
const asyncHandler = require('express-async-handler');

//Get innovation support controller
const getSupportInnovation =  asyncHandler(
    async(req,res)=>{
        const innovationsSupport = await SupportInnovations.find()
        res.json(innovationsSupport);
    }
)

//Create innovation support controller
const  createSupportInnovation = asyncHandler(async (req, res) => {
  const { suppotorName,suppotorEmail,supportorPhone, price } = req.body;

  if (!suppotorName || !suppotorEmail || !supportorPhone|| !price ) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const SupportInnovation = new SupportInnovations({ suppotorName,suppotorEmail,supportorPhone,price });

    const createdSupportInnovation = await SupportInnovation.save();

    res.status(201).json(createdSupportInnovation);
  }
});


//approve support innovations
const innovationSupportApprove = asyncHandler(async (req, res) => {

   const data = await SupportInnovations.findById(req.params.id);
   
try {
   
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    // Update the data with the approved status
    data.status = 'approved';
    await data.save();
    res.json({ message: 'Innovation Support Data approved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//delete innovation support
const deleteInnovationSupport = asyncHandler(async (req, res) => {
  const innovationSup = await SupportInnovations.findById(req.params.id);

  // if ( innovationSup.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Error("You can't perform this action");
  // }

  if ( innovationSup ) {
    await  innovationSup.remove();
    res.json({ message: "Innovation item is removed" });
  } else {
    res.status(404);
    throw new Error("This kind of innovation is not Found");
  }
});

//update submit innovations
const updateSupport = asyncHandler(async (req, res) => {
  const {  suppotorName,suppotorEmail,supportorPhone, price } = req.body;

  const supportInnovation = await SupportInnovations.findById(req.params.id);

  if (supportInnovation ) {
    supportInnovation.suppotorName = suppotorName;
    supportInnovation.suppotorEmail =suppotorEmail;
    supportInnovation.supportorPhone = supportorPhone;
    supportInnovation.price =  price;
    

    const updatedInnovation = await supportInnovation.save();
    res.json(updatedInnovation);
  } else {
    res.status(404);
    throw new Error("Support Details not found");
  }
});



//export all functions
module.exports = {
     createSupportInnovation,
     getSupportInnovation,
     innovationSupportApprove,
     deleteInnovationSupport,
     updateSupport 
}