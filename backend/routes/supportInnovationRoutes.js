const express = require('express');
const router = express.Router();
const {
      createSupportInnovation,
      getSupportInnovation,
      innovationSupportApprove
       } = require('../controllers/supportInnovationController');


router.route('/create').post(createSupportInnovation);
router.route('/').get(getSupportInnovation);
router.route('/:id').post(innovationSupportApprove);

module.exports = router;