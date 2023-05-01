const express = require('express');
const router = express.Router();
const {getInnovation,
       getInnovationById} = require('../controllers/submitInnovationController');

router.route('/').get(getInnovation);
router.route('/:id').get(getInnovationById);
// .put(protect,UpdateCategory).delete(protect,DeleteCategory);

module.exports = router;