const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authUserMiddleware');

const {getVideo,
       getVideoById,
       createVideo,
       deleteVideo,
       updateVideo
       } = require('../controllers/videoController');

router.route('/').get(getVideo);
router.route('/create').post(createVideo);
router.route('/:id').get(getVideoById).delete(deleteVideo).put(updateVideo);

module.exports = router;