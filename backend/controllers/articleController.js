const Articles = require('../models/articlesubmissonModel');
const asyncHandler = require('express-async-handler');

//Get Article controller
const getArticle =  asyncHandler(
    async(req,res)=>{
        const Article = await Articles.find()
        res.json(Article);
    }
)

//Create Article controller
const  createArticle = asyncHandler(async (req, res) => {
  const { articleType, articleImage, articleTitle, articleContent,  authorName, dateofPublish, IsApproved } = req.body;

  if (! articleType || !articleImage || !articleTitle || !articleContent || !authorName || !dateofPublish) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const Article = new Articles({ articleType, articleImage, articleTitle, articleContent, authorName, dateofPublish });

    const createArticle = await Article.save();

    res.status(201).json(createArticle);
  }
});

//Get one Article controller
const getArticleById= asyncHandler(async (req,res)=>{
    const Article = await Articles.findById(req.params.id);

    if(Article){
      res.json(Article);
    }else{
      res.status(404).json({message: "Article is not found"});
    }
    res.json(note);
  }
)

//Update video
const updateArticle = asyncHandler(async (req, res) => {
	const article = await article.findById(req.article._id);

	if (article) {
		article.articleType = req.body.articleType || article.articleType;
		article.articleImage = req.body.articleImage || article.articleImage;
		article.articleTitle = req.body.articleTitle || article.articleTitle;
		article.articleContent = req.body.articleContent || article.articleContent;
		article.authorName = req.body.authorName || article.authorName;
        article.dateofPublish = req.body.dateofPublish || article.dateofPublish;
		
		const updateArticle = await article.save();

		res.json({
			_id: updateArticle._id,
      articleType: updateArticle.articleType,
			articleImage: updateArticle.articleImage,
			articleTitle: updateArticle.articleTitle,
			articleContent: updateArticle.articleContent,
			authorName: updateArticle.authorName,
      dateofPublish: updateArticle.dateofPublish,
		});
	} else {
		res.status(404);
		throw new Error("Article Not Found !");
	}
});

//delete Article controller
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Articles.findById(req.params.id);

  if ( article.user.toString() !== req.article._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if ( article ) {
    await  article.remove();
    res.json({ message: "Article removed" });
  } else {
    res.status(404);
    throw new Error("This kind of Article is not Found");
  }
});


//approveArticleRequest
const articleApprove = asyncHandler(async (req, res) => {


  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    article.IsApproved = true;

    await article.save();

    // Fetch all approved innovations
    const approvedArticle = await Articles.find({ IsApproved: true });

    res.json({
      message: 'Article Request Approved successfully!',
      approvedArticle: approvedArticle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
  
});

//deny article requests
const articleDeny = asyncHandler(async (req, res) => {
try {
    const data = await Articles.findById(req.params._id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    // Update the data with the denied status
    data.status = 'denied';
    await data.save();
    res.json({ message: 'Data denied successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

const articleApproveList = asyncHandler(async(req, res)=>{
   try {
    const approvedData = await Articles.find({ IsApproved:true });
    console.log(approvedData)
    res.json(approvedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
})



//export all functions
module.exports = {
     getArticle,
     getArticleById,
     createArticle,
     articleApprove,
     articleDeny,
     updateArticle,
     deleteArticle,
     articleApproveList

}