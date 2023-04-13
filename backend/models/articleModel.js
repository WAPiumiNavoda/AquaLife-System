const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},

		title: {
			type: String,
			required: true,
		},

		content:{
			type:String,
			required:true,
		},

		upload_date: {
			type: Date,
			required: true,
		},

		author_name: {
			type: String,
			required: true,
		},

		pic: {
			type: String,
			required: true,
			default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},

	},
	{
		timestamps: true,
	}
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
