const { expect } = require("chai");
const { createInnovation } = require("../controllers/submitInnovationController");


describe("Testing the project routes", () => {
	it("Create Innovation", async () => {
		const returnedProject =  createInnovation ({
            innovationType:"test innovation",
            innovationTitle:"test create innovation",
            innovationDes:"test description",
            innovationImage:"http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…" ,
            innovationFile:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
		});
		const project = {
			Name: "INNOVATION",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

    describe("Testing the project routes", () => {
    it("Get Innovation", async () => {
        const response = await chai.request(app).get("/");
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body.name).to.equal("INNOVATION");
    });
});


});