const Donate = require("../models/donateModel");
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

const getDonate = asyncHandler(async (req, res) => {
	const donate = await Donate.find();
	res.json(donate);
});


const createDonate = asyncHandler(async (req, res) => {
	const {
		email,
        cardNumber,
        date,
		cvc,
        donatePrice,
        cardName,
        country
	} = req.body;

	if (
		!email ||
		!cardNumber ||
		!date ||
		!cvc ||
        !donatePrice ||
        !cardName ||
        !country
		
	) {
		res.status(400);
		throw new Error("Please Fill all the Fields");
	} else {
		const donate = new Donate({
			email,
            cardNumber,
            date,
		    cvc,
            donatePrice,
            cardName,
            country
		});
		const createDonate = await donate.save();

		res.status(201).json(createDonate);
	}
});

const getDonateById = asyncHandler(async (req, res) => {
	const donate = await Donate.findById(req.params.id);

	if (donate) {
		res.json(donate);
	} else {
		res.status(404).json({ message: "Donate Details not Found" });
	}
});

const updateDonate = asyncHandler(async (req, res) => {
	const {
		email,
        cardNumber,
        date,
		cvc,
        donatePrice,
        cardName,
        country
	} = req.body;

	const donate = await Donate.findById(req.params.id);

	if (donate) {
		donate.email = email;
		donate.cardNumber = cardNumber;
		donate.date = date;
		donate.cvc = cvc;
        donate.donatePrice = donatePrice;
        donate.cardName = cardName;
        donate.country = country;
		
		const updatedDonate = await donate.save();
		res.json(updatedDonate);
	} else {
		res.status(404);
		throw new Error("Donate not Found");
	}
});

const deleteDonate = asyncHandler(async (req, res) => {
	const donate = await Donate.findById(req.params.id);

	if (donate) {
		await donate.remove();
		res.json({ message: "Donate Removed" });
	} else {
		res.status(404);
		throw new Error("Donate not Found");
	}
});

// const approveTrainerLeaveByAdmin = asyncHandler(async (req, res) => {
// 	const { approved } = req.body;

// 	const leave = await TrainerLeave.findById(req.params.id);

// 	if (leave) {
// 		leave.approved = approved;

// 		const approvedLeave = await leave.save();
// 		res.json(approvedLeave);
// 	} else {
// 		res.status(404);
// 		throw new Error("Leave not Found");
// 	}
// });

module.exports = {
    getDonate,
	createDonate ,
	getDonateById,
	updateDonate,
	deleteDonate
	
};