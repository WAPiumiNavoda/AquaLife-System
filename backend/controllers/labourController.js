const Donate = require("../models/donateModel");
const Labour = require("../models/labourModel");
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

const getLabour = asyncHandler(async (req, res) => {
	const labour = await Labour.find();
	res.json(labour);
});


const createLabour = asyncHandler(async (req, res) => {
	const {
		email,
        name,
        phoneNumber,
        date,
        country
	} = req.body;

	if (
		!email ||
		!name ||
        !phoneNumber ||
		!date ||
        !country
		
	) {
		res.status(400);
		throw new Error("Please Fill all the Fields");
	} else {
		const labour = new Labour({
			email,
            name,
            phoneNumber,
            date,
            country
		});
		const createLabour = await labour.save();

		res.status(201).json(createLabour);
	}
});

const getLabourById = asyncHandler(async (req, res) => {
	const labour = await Labour.findById(req.params.id);

	if (labour) {
		res.json(labour);
	} else {
		res.status(404).json({ message: "Labour Details not Found" });
	}
});

const updateLabour = asyncHandler(async (req, res) => {
	const {
		    email,
            name,
            phoneNumber,
            date,
            country
	} = req.body;

	const labour = await Labour.findById(req.params.id);

	if (labour) {
		labour.email = email;
		labour.name = name;
        labour.phoneNumber = phoneNumber;
		labour.date = date;
        labour.country = country;
		
		const updatedLabour = await labour.save();
		res.json(updatedLabour);
	} else {
		res.status(404);
		throw new Error("Labour not Found");
	}
});

const deleteLabour = asyncHandler(async (req, res) => {
	const labour = await Labour.findById(req.params.id);

	if (labour) {
		await labour.remove();
		res.json({ message: "Labour Removed" });
	} else {
		res.status(404);
		throw new Error("Labour not Found");
	}
});



module.exports = {
    getLabour,
	createLabour ,
	getLabourById,
	updateLabour ,
	deleteLabour
	
};