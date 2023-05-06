const express = require('express');
const router = express.Router();
const {
      createSupportInnovation,
      getSupportInnovation
       } = require('../controllers/supportInnovationController');


router.route('/create').post(createSupportInnovation);
router.route('/').get(getSupportInnovation);

module.exports = router;