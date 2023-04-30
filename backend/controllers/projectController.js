const Project = require("../models/projectModel");
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

const getProjects = asyncHandler(async (req, res) => {
	const project = await Project.find();
	res.json(project);
});

const getProjectForEachAdmin = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	const projects = await Project.find({ nic: user.nic });

	res.json(projects);
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

// const updateTrainerLeave = asyncHandler(async (req, res) => {
// 	const {
// 		fullName,
// 		nic,
// 		division,
// 		number_of_days,
// 		date_for_commencing_leave,
// 		date_for_resuming_duties,
// 		reasons_for_leave,
// 	} = req.body;

// 	const leave = await TrainerLeave.findById(req.params.id);

// 	if (leave) {
// 		leave.fullName = fullName;
// 		leave.nic = nic;
// 		leave.division = division;
// 		leave.number_of_days = number_of_days;
// 		leave.date_for_commencing_leave = date_for_commencing_leave;
// 		leave.date_for_resuming_duties = date_for_resuming_duties;
// 		leave.reasons_for_leave = reasons_for_leave;

// 		const updatedLeave = await leave.save();
// 		res.json(updatedLeave);
// 	} else {
// 		res.status(404);
// 		throw new Error("Leave not Found");
// 	}
// });

// const deleteTrainerLeave = asyncHandler(async (req, res) => {
// 	const leave = await TrainerLeave.findById(req.params.id);

// 	if (leave) {
// 		await leave.remove();
// 		res.json({ message: "Leave Removed" });
// 	} else {
// 		res.status(404);
// 		throw new Error("Leave not Found");
// 	}
// });

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
	getProjectForEachAdmin,
	createProject,
	getProjectById,
	
};