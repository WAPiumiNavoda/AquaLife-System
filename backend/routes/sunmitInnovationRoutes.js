const express = require('express');
const router = express.Router();
const {getInnovation} = require('../controllers/submitInnovationController');

router.route('/').get(getInnovation);

module.exports = router;