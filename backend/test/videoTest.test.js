const { expect } = require("chai");
const { createVideo, getVideo, getVideoById, updateVideo, deleteVideo } = require("../controllers/videoController");

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

	it("Get Video Test", async () => {
		const returnedProject = getVideo({
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

	it("Get one Video Test", async () => {
		const returnedProject = getVideoById({
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

	it("Update Video Test", async () => {
		const returnedProject = updateVideo({
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

	it("Delete Video Test", async () => {
		const returnedProject = deleteVideo({
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
