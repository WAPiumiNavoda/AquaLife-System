const express = require('express');
const router = express.Router();
const {
      createSupportInnovation
       } = require('../controllers/supportInnovationController');


router.route('/create').post(createSupportInnovation);


module.exports = router;