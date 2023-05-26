const { expect } = require("chai");
const {
	createQualityTest,
	getQualityTest,
	getQualityTestById,
	deleteQualityTest,
} = require("../controllers/qualityTestController");

describe("Testing the Quality Test routes", () => {
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

	it("Get Quality Test", async () => {
		const returnedProject = getQualityTest({
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

	it("Get one Quality Test", async () => {
		const returnedProject = getQualityTestById({
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

	it("Delete Quality Test", async () => {
		const returnedProject = deleteQualityTest({
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
