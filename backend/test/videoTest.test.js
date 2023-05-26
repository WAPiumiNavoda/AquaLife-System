const { expect } = require("chai");
const { createVideo } = require("../controllers/videoController");

describe("Testing the Video routes", () => {
	it("Create Video Test", async () => {
		const returnedProject = createVideo({
			videoCategory: "test category",
			videoFile: "https://icon-library.com/images/videographer-icon/videographer-icon-24.jpg",
			videoTitle: "test title",
			videoCaption: "test caption",
			dateofUpload: "test date",
		});
		const project = {
			Name: "VIDEOTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});
});
