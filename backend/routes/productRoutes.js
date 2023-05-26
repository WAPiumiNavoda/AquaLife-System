const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authUserMiddleware");
const {
	getProduct,
	createProduct,
	getProductById,
	UpdateProduct,
	deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getProduct);
router.route("/create").post(createProduct);
router.route("/:id").get(getProductById);
router.route("/:id").delete(deleteProduct);
router.route("/:id").put(UpdateProduct);

module.exports = router;
