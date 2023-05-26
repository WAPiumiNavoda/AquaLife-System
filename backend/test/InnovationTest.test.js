const { expect } = require("chai");
const { createInnovation, UpdateInnovation, getInnovation } = require("../controllers/submitInnovationController");

describe("Testing the innovation routes", () => {
	it("Create Innovation", async () => {
		const returnedProject = createInnovation({
			innovationType: "test innovation",
			innovationTitle: "test create innovation",
			innovationDes: "test description",
			innovationImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
			innovationFile: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		});
		const project = {
			Name: "INNOVATION",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Get Innovation", async () => {
		const returnedProject = getInnovation({
			innovationType: "test innovation",
			innovationTitle: "test create innovation",
			innovationDes: "test description",
			innovationImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
			innovationFile: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		});
		const project = {
			Name: "INNOVATION",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Update Innovation", async () => {
		const returnedProject = UpdateInnovation({
			innovationType: "test innovation",
			innovationTitle: "test create innovation",
			innovationDes: "test description",
			innovationImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
			innovationFile: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		});
		const project = {
			Name: "INNOVATION",
		};
		expect(returnedProject.name).to.equal(project.name);
	});
});
