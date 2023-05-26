const Products = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const express = require("express");
const router = express.Router();

//Get Products
exports.getProduct = asyncHandler(async (req, res) => {
	const products = await Products.find();
	res.json(products);
});

//Create Product
exports.createProduct = asyncHandler(async (req, res) => {
	const { productName, productDes, productCap, productPrice, productImage } = req.body;

	if (!productName || !productDes || !productCap || !productPrice || !productImage) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const Product = new Products({ productName, productDes, productCap, productPrice, productImage });

		const createdProduct = await Product.save();

		res.status(201).json(createdProduct);
	}
});

//Get one product
exports.getProductById = asyncHandler(async (req, res) => {
	const product = await Products.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: "Product Item is not found" });
	}
	res.json(product);
});

//delete product
exports.deleteProduct = asyncHandler(async (req, res) => {
	const product = await Products.findById(req.params.id);

	if (!product) {
		res.status(404);
		throw new Error("This kind of Product is not Found");
	}

	if (product.user && product.user.toString() !== req.user._id.toString()) {
		res.status(401);
		throw new Error("You can't perform this action");
	}

	await product.remove();
	res.json({ message: "Product item is removed" });
});

//Update product
exports.UpdateProduct = asyncHandler(async (req, res) => {
	const { productName, productDes, productCap, productPrice, productImage } = req.body;

	const product = await Products.findById(req.params.id);

	// if (product.user.toString() !== req.user._id.toString()) {
	//   res.status(401);
	//   throw new Error("You can't perform this action");
	// }

	if (product) {
		product.productName = productName;
		product.productDes = productDes;
		product.productCap = productCap;
		product.productPrice = productPrice;
		product.productImage = productImage;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});
