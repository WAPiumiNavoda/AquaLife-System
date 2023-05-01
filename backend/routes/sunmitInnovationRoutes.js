const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');
const {getInnovation,
       getInnovationById,
       createInnovation,
       deleteInnovation} = require('../controllers/submitInnovationController');

router.route('/').get(protect,getInnovation);
router.route('/create').post(protect,createInnovation);
router.route('/:id').get(protect,getInnovationById).delete(protect,deleteInnovation);
// .put(protect,UpdateCategory);

module.exports = router;