const express = require("express");
const {
	createQualityTest,
	getQualityTest,
	getQualityTestById,
	deleteQualityTest,
} = require("../controllers/qualityTestController");
const router = express.Router();

router.route("/create").post(createQualityTest);
router.route("/").get(getQualityTest);
router.route("/:id").get(getQualityTestById).delete(deleteQualityTest);

module.exports = router;
