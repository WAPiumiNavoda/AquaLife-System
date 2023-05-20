const express = require("express");
const { registerUser, authUser, getUserProfile, updateUserProfile } = require("../controllers/userController");
const {createDonate ,
	getDonate,
	getDonateById,
	updateDonate,
	deleteDonate
	} = require('../controllers/donateController');

const { protect } = require("../middleware/authUserMiddleware");
const router = express.Router();
const {getInnovation,
       getInnovationById,
       createInnovation,
       innovationApprove,
       innovationDeny,
       innovationApproveList,
       UpdateInnovation,
       deleteInnovation,
       updateInnovation
       } = require('../controllers/submitInnovationController');
const {
      createSupportInnovation,
      getSupportInnovation,
      innovationSupportApprove,
      deleteInnovationSupport,
      updateSupport
       } = require('../controllers/supportInnovationController');



//Routes for user Account Operations
router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/view").get(protect, getUserProfile);
router.route("/edit").put(protect, updateUserProfile);


//Routes for user donate management Operations
router.route("/donateCreate").post(createDonate );
router.route("/getdonates").get(getDonate);
router
	.route("/getDonate/:id")
	.get(getDonateById)
	.put(updateDonate)
	.delete(deleteDonate);

//innovation user routes
router.route('/innovation').get(getInnovation);
router.route('/innovation/create').post(createInnovation);
router.route('/innovation/:id').get(getInnovationById);
router.route('/innovation/:id').post(innovationApprove);
router.route('/innovation/deny/:id').post(innovationDeny);
router.route('/innovation/update/:id').put(UpdateInnovation);
router.route('/innovation/approved/:id').get(innovationApproveList);



router.route('/supportInnovation/create').post(createSupportInnovation);
router.route('/supportInnovation').get(getSupportInnovation);
router.route('/supportInnovation/:id').post(innovationSupportApprove);
router.route('/supportInnovation/delete/:id').delete(deleteInnovationSupport);
router.route('/supportInnovation/update/:id').put(updateSupport);




module.exports = router;