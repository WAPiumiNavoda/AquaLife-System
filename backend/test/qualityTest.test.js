const { expect } = require("chai");
const { createQualityTest } = require("../controllers/qualityTestController");

describe("Testing the project routes", () => {
	it("Create Quality Test", async () => {
		const returnedProject = createQualityTest({
			token: "test token",
			name: "test name",
			email: "test email",
			mobile: "077 9876543",
			district: "test district",
		});
		const project = {
			Name: "QUALITYTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});
});
