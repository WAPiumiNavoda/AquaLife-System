const { expect } = require("chai");
const { createProject, updateProject,getProjects,deleteProject } = require("../controllers/projectController");

describe("Testing the project routes", () => {
	it("Create project", async () => {
		const returnedProject = createProject ({
            name:"Town East of Colombo District Water Supply Project - Package",
            description:"test create project",
            price:"LKR50000",
            photo:"http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…" 
		});
		const project = {
			Name: "SLIIT",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Update project", async () => {
		const returnedProject = updateProject({
			name:"Town East of Colombo District Water Supply Project - Package",
            description:"test create project",
            price:"LKR50000",
            photo:"http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…" 
		});
		const project = {
			Name: "SLIIT",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	
    it("Get project", async () => {
		const returnedProject = getProjects({
			
		});
		const project = {
			Name: "SLIIT",
		};
		expect(returnedProject.name).to.equal(project.name);
	});



  it("Delete project", async () => {
	const returnedProject = deleteProject({
		name:"Town East of Colombo District Water Supply Project - Package",
		description:"test create project",
		price:"LKR50000",
		photo:"http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…" 
	});
	const project = {
		Name: "SLIIT",
	};
	expect(returnedProject.name).to.equal(project.name);
  });

});

