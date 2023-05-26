const Labor = require("../models/laborModel");
const asyncHandler = require("express-async-handler");

const getLabor = asyncHandler(async (req, res) => {
	const labor = await Labor.find();
	res.json(labor);
});


const createLabour = asyncHandler(async (req, res) => {
	const {
		name,
        email,
        userName,
        availableDate,
        country,
		phone
	} = req.body;

	if (
		!name ||
        !email ||
        !userName ||
        !availableDate ||
        !country ||
		!phone
	) {
		res.status(400);
		throw new Error("Please Fill all the Fields");
	} else {
		const labor = new Labor({
			name,
            email,
            userName,
            availableDate,
            country,
			phone
		});
		const createLabor = await labor.save();

		res.status(201).json(createLabor);
	}
});

const getLaborById = asyncHandler(async (req, res) => {
	const labor = await Labor.findById(req.params.id);

	if (labor) {
		res.json(labor);
	} else {
		res.status(404).json({ message: "Details not Found" });
	}
});

const updateLabor = asyncHandler(async (req, res) => {
	const {
		name,
        email,
        userName,
        availableDate,
        country,
		phone
	} = req.body;

	const labor = await Labor.findById(req.params.id);

	if (labor) {
		labor.name = name;
		labor.email = email;
		labor.userName = userName;
		labor.availableDate = availableDate;
        labor.country =  country;
		labor.phone =  phone;

		
		const updatedLabor = await labor.save();
		res.json(updatedLabor);
	} else {
		res.status(404);
		throw new Error("Details not Found");
	}
});

const deleteLabor = asyncHandler(async (req, res) => {
	const labor = await Labor.findById(req.params.id);

	if (labor) {
		await labor.remove();
		res.json({ message: "Details Removed" });
	} else {
		res.status(404);
		throw new Error("Details not Found");
	}
});


module.exports = {
    getLabor,
	createLabour,
	getLaborById,
	updateLabor,
	deleteLabor
	
};