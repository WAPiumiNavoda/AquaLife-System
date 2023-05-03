const Project = require("../models/projectModel");
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

const getProjects = asyncHandler(async (req, res) => {
	const project = await Project.find();
	res.json(project);
});


const createProject = asyncHandler(async (req, res) => {
	const {
		name,
        description,
        price,
		photo,
	} = req.body;

	if (
		!name ||
		!description ||
		!price ||
		!photo
		
	) {
		res.status(400);
		throw new Error("Please Fill all the Fields");
	} else {
		const project = new Project({
			name,
            description,
            price,
		    photo,
		});
		const createProject = await project.save();

		res.status(201).json(createProject);
	}
});

const getProjectById = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);

	if (project) {
		res.json(project);
	} else {
		res.status(404).json({ message: "Project Details not Found" });
	}
});

const updateProject = asyncHandler(async (req, res) => {
	const {
		name,
        description,
        price,
		photo,
	} = req.body;

	const project = await Project.findById(req.params.id);

	if (project) {
		project.name = name;
		project.description = description;
		project.price = price;
		project.photo = photo;
		
		const updatedProject = await project.save();
		res.json(updatedProject);
	} else {
		res.status(404);
		throw new Error("Project not Found");
	}
});

const deleteProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);

	if (project) {
		await project.remove();
		res.json({ message: "Project Removed" });
	} else {
		res.status(404);
		throw new Error("project not Found");
	}
});

// const approveTrainerLeaveByAdmin = asyncHandler(async (req, res) => {
// 	const { approved } = req.body;

// 	const leave = await TrainerLeave.findById(req.params.id);

// 	if (leave) {
// 		leave.approved = approved;

// 		const approvedLeave = await leave.save();
// 		res.json(approvedLeave);
// 	} else {
// 		res.status(404);
// 		throw new Error("Leave not Found");
// 	}
// });

module.exports = {
    getProjects,
	createProject,
	getProjectById,
	updateProject,
	deleteProject
	
};