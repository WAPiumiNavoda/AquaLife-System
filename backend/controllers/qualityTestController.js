const QualityTests = require("../models/qualityTestModel");
const asyncHandler = require("express-async-handler");

//Get Quality Test
exports.getQualityTest = asyncHandler(async (req, res) => {
	const qualityTests = await QualityTests.find();
	res.json(qualityTests);
});

//Create Quality Test
exports.createQualityTest = asyncHandler(async (req, res) => {
	const { token, name, email, mobile, district } = req.body;

	if (!token || !name || !email || !mobile || !district) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const newQualityTest = new QualityTests({ token, name, email, mobile, district, createdAt: Date.now() });

		const createdQualityTest = await newQualityTest.save();

		res.status(201).json(createdQualityTest);
	}
});

//Get Single Quality Test
exports.getQualityTestById = asyncHandler(async (req, res) => {
	const qualityTest = await QualityTests.findById(req.params.id);

	if (qualityTest) {
		res.json(qualityTest);
	} else {
		res.status(404).json({ message: "Quality Test is not found" });
	}
	res.json(qualityTest);
});

//Delete Quality Test
exports.deleteQualityTest = asyncHandler(async (req, res) => {
	const qualityTest = await QualityTests.findById(req.params.id);

	if (!qualityTest) {
		res.status(404);
		throw new Error("This kind of Quality Test is not Found");
	}

	if (qualityTest.user && qualityTest.user.toString() !== req.user._id.toString()) {
		res.status(401);
		throw new Error("You can't perform this action");
	}

	await qualityTest.remove();
	res.json({ message: "Quality Test item is removed" });
});
