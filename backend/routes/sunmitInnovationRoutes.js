const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');
const {getInnovation,
       getInnovationById,
       createInnovation} = require('../controllers/submitInnovationController');

router.route('/').get(protect,getInnovation);
router.route('/create').post(protect,createInnovation);
router.route('/:id').get(protect,getInnovationById);
// .put(protect,UpdateCategory).delete(protect,DeleteCategory);

module.exports = router;