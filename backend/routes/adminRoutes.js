const express = require("express");
const { createProject, getProjectForEachAdmin,getProjectById} = require("../controllers/projectController");
const { protect } = require("../middleware/authUserMiddleware");
const router = express.Router();

//Routes for Admin Project management Operations
router.route("/projectCreate").post(protect,createProject);
router.route("/getProjects/:id").get(protect, getProjectForEachAdmin);
router
	.route("/getProject/:id")
	.get(protect, getProjectById)
	// .put(protect, updateTrainerLeave)
	// .delete(protect, deleteTrainerLeave);



module.exports = router;