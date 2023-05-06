const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');
const {getInnovation,
       getInnovationById,
       createInnovation,
       innovationApprove,
       innovationDeny,
       innovationApproveList,
       deleteInnovation,
       updateInnovation
       } = require('../controllers/submitInnovationController');

router.route('/').get(getInnovation);
router.route('/create').post(createInnovation);
router.route('/:id').get(getInnovationById);
router.route('/:id').post(innovationApprove);
router.route('/deny/:id').post(innovationDeny);
router.route('/approved').get(innovationApproveList);

module.exports = router;