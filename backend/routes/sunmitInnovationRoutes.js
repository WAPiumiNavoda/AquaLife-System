const express = require('express');
const router = express.Router();
const {getInnovation,
       getInnovationById,
       createInnovation} = require('../controllers/submitInnovationController');

router.route('/').get(getInnovation);
router.route('/create').post(createInnovation);
router.route('/:id').get(getInnovationById);
// .put(protect,UpdateCategory).delete(protect,DeleteCategory);

module.exports = router;