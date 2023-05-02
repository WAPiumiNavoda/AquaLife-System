const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');

const {getArticle,
       getArticleById,
       createArticle,
       deleteArticle,
       updateArticle
       } = require('../controllers/articleController');

router.route('/').get(getArticle);
router.route('/create').post(createArticle);
router.route('/:id').get(getArticleById).delete(deleteArticle).put(updateArticle);

module.exports = router;