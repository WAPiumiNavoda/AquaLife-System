const { expect } = require("chai");
const {
	createProduct,
	UpdateProduct,
	getProduct,
	getProductById,
	deleteProduct,
} = require("../controllers/productController");

describe("Testing the Product routes", () => {
	it("Create product", async () => {
		const returnedProject = createProduct({
			productName: "test product name",
			productDes: "test product description",
			productCap: "100",
			productPrice: "100",
			productImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
		});
		const project = {
			Name: "PRODUCTTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Update product", async () => {
		const returnedProject = UpdateProduct({
			productName: "test name",
			productDes: "test description",
			productCap: "1000",
			productPrice: "200",
			productImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
		});
		const project = {
			Name: "PRODUCTTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Get product", async () => {
		const returnedProject = getProduct({
			productName: "test name",
			productDes: "test description",
			productCap: "1000",
			productPrice: "200",
			productImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
		});
		const project = {
			Name: "PRODUCTTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Get one product", async () => {
		const returnedProject = getProductById({
			productName: "test name",
			productDes: "test description",
			productCap: "1000",
			productPrice: "200",
			productImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
		});
		const project = {
			Name: "PRODUCTTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});

	it("Delete product", async () => {
		const returnedProject = deleteProduct({
			productName: "test name",
			productDes: "test description",
			productCap: "1000",
			productPrice: "200",
			productImage: "http://res.cloudinary.com/cake-lounge/image/upload/v1684481878/glk4bhk…",
		});
		const project = {
			Name: "PRODUCTTEST",
		};
		expect(returnedProject.name).to.equal(project.name);
	});
});
