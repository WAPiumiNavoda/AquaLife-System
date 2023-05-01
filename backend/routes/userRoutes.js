const express = require("express");
const { registerUser, authUser, getUserProfile, updateUserProfile } = require("../controllers/userController");
const { createProject, getProjectForEachAdmin,getProjectById} = require("../controllers/projectController");
const { protect } = require("../middleware/authUserMiddleware");
const router = express.Router();

//Routes for User Account Operations
router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/view").get(getUserProfile);
router.route("/edit").put(protect, updateUserProfile);

//Routes for Admin Project management Operations
router.route("/projectCreate").post(createProject);
router.route("/getProjects/:id").get(getProjectForEachAdmin);
router
	.route("/getProject/:id")
	.get(protect, getProjectById)
	// .put(protect, updateTrainerLeave)
	// .delete(protect, deleteTrainerLeave);




module.exports = router;