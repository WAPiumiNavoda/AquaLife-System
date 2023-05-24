const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');

const {getArticle,
       getArticleById,
       createArticle,
       deleteArticle,
       updateArticle,
       articleApprove,
       articleDeny,
       articleApproveList
       } = require('../controllers/articleController');

router.route('/').get(getArticle);
router.route('/create').post(createArticle);
router.route('/:id').get(getArticleById).delete(deleteArticle).put(updateArticle);
router.route('/:id').post(articleApprove);
router.route('/deny/:id').post(articleDeny);
router.route('/approved').get(articleApproveList);

module.exports = router;