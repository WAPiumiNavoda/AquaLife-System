const express = require("express");
const { registerUser, authUser, getUserProfile, updateUserProfile } = require("../controllers/userController");
const {createDonate ,
	getDonate,
	getDonateById,
	updateDonate,
	deleteDonate
	} = require('../controllers/donateController');

const { protect } = require("../middleware/authUserMiddleware");
const { createLabour, getLabour, updateLabour, getLabourById, deleteLabour } = require("../controllers/labourController");
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

//Routes for user Labour Management
router.route("/labourCreate").post(createLabour );
router.route("/getlabours").get(getLabour);
router
	.route("/getLabours/:id")
	.get(getLabourById)
	.put(updateLabour)
	.delete(deleteLabour);


module.exports = router;