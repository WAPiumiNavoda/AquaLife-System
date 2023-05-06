const express = require("express");
const {createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProject
	} = require('../controllers/projectController');

const router = express.Router();

//Routes for Admin Project management Operations
router.route("/projectCreate").post(createProject);
router.route("/getProjects").get(getProjects);
router
	.route("/getProject/:id")
	.get(getProjectById)
	.put(updateProject)
	.delete(deleteProject);


module.exports = router;