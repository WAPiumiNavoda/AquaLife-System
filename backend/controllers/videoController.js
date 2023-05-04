const Videos = require('../models/videoUploadingModel');
const asyncHandler = require('express-async-handler');

//Get Video controller
const getVideo =  asyncHandler(
    async(req,res)=>{
        const Video = await Videos.find()
        res.json(Video);
    }
)

//Create Video controller
const  createVideo = asyncHandler(async (req, res) => {
  const { videoCategory, videoFile, videoTitle, videoCaption, dateofUpload } = req.body;

  if (! videoCategory || !videoFile || !videoTitle || !videoCaption || !dateofUpload) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Video = new Videos({  videoCategory,videoFile, videoTitle, videoCaption,dateofUpload });

    const createdVideo = await Video.save();

    res.status(201).json(createdVideo);
  }
});

//Get one video controller
const getVideoById= asyncHandler(async (req,res)=>{
    const Video = await Videos.findById(req.params.id);

    if(Video){
      res.json(Video);
    }else{
      res.status(404).json({message: "Video is not found"});
    }
    res.json(note);
  }
)

//Update video
const updateVideo = asyncHandler(async (req, res) => {
	const video = await video.findById(req.video._id);

	if (video) {
		video.videoCategory = req.body.videoCategory || user.videoCategory;
		video.videoFile = req.body.videoFile || user.videoFile;
		video.videoTitle = req.body.videoTitle || user.videoTitle;
		video.videoCaption = req.body.videoCaption || user.videoCaption;
		video.dateofUpload = req.body.dateofUpload || user.dateofUpload;
		
		const updateVideo = await video.save();

		res.json({
			_id: updateVideo._id,
            videoCategory: updateVideo.videoCaption,
			videoFile: updateVideo.videoFile,
			videoTitle: updateVideo.videoTitle,
			videoCaption: updateVideo.videoCaption,
			dateofUpload: updateVideo.dateofUpload,
		});
	} else {
		res.status(404);
		throw new Error("Video Not Found !");
	}
});

//delete Video controller
const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Videos.findById(req.params.id);

  if ( video.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if ( video ) {
    await  video.remove();
    res.json({ message: "Video removed" });
  } else {
    res.status(404);
    throw new Error("This kind of Video is not Found");
  }
});


//export all functions
module.exports = {
     getVideo,
     getVideoById,
     createVideo,
     updateVideo,
     deleteVideo

}