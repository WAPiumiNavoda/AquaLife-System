const express = require('express');
const router = express.Router();
const {
      createSupportInnovation,
      getSupportInnovation,
      innovationSupportApprove,
      deleteInnovationSupport
       } = require('../controllers/supportInnovationController');


router.route('/create').post(createSupportInnovation);
router.route('/').get(getSupportInnovation);
router.route('/:id').post(innovationSupportApprove);
router.route('/delete/:id').delete(deleteInnovationSupport);

module.exports = router;