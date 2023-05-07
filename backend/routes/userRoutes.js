const express = require("express");
const { registerUser, authUser, getUserProfile, updateUserProfile } = require("../controllers/userController");
const {createDonate ,
	getDonate,
	getDonateById,
	updateDonate,
	deleteDonate
	} = require('../controllers/donateController');

const { protect } = require("../middleware/authUserMiddleware");
const router = express.Router();

//Routes for user Account Operations
router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/view").get(protect, getUserProfile);
router.route("/edit").put(protect, updateUserProfile);


//Routes for user donate management Operations
router.route("/donateCreate").post(createDonate );
router.route("/getdonates").get(getDonate);
router
	.route("/getDonate/:id")
	.get(getDonateById)
	.put(updateDonate)
	.delete(deleteDonate);


module.exports = router;