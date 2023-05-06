const express = require("express");
const {createDonate ,
	getDonate,
	getDonateById,
	updateDonate,
	deleteDonate
	} = require('../controllers/donateController');

const router = express.Router();

//Routes for Admin Project management Operations
router.route("/projectCreate").post(createDonate );
router.route("/getProjects").get(getDonate);
router
	.route("/getProject/:id")
	.get(getDonateById)
	.put(updateDonate)
	.delete(deleteDonate);


module.exports = router;