const mongoose = require("mongoose");

const qualityTestSchema = new mongoose.Schema({
	token: {
		type: String,
	},
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	mobile: {
		type: Number,
	},
	district: {
		type: String,
	},
	createdAt: {
		type: String,
		default: () =>
			new Date().toLocaleDateString(undefined, {
				weekday: "short",
				year: "numeric",
				month: "short",
				day: "numeric",
			}),
	},
});

const QualityTest = mongoose.model("QualityTest", qualityTestSchema);

module.exports = QualityTest;
