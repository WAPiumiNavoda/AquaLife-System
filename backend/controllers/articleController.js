const Articles = require('../models/articlesubmissonModel');
const asyncHandler = require('express-async-handler');

//Get Article controller
const getArticle =  asyncHandler(
    async(req,res)=>{
        const Articles = await Articles.find()
        res.json(Articles);
    }
)

//Create Article controller
const  createArticle = asyncHandler(async (req, res) => {
  const { articleType, 
          articleImage, 
          articleTitle, 
          articleContent, 
          authorName, 
          dateofPublish 
        } = req.body;

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


//export all functions
module.exports = {
     getArticle,
     getArticleById,
     createArticle,
     updateArticle,
     deleteArticle

}