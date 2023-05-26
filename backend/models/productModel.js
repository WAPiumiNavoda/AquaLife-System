const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		productName: {
			type: String,
		},
		productDes: {
			type: String,
		},
		productCap: {
			type: Number,
		},
		productPrice: {
			type: Number,
		},
		productImage: {
			type: String,
			default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
