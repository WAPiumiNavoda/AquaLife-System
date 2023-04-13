const ArticleModel = require("../models/articleModel");

const addArticle = (req, res) => {
	const {
		category,
		title,
		content,
		upload_date,
		author_name,
		pic,
	} = req.body;

	const newArticle = new ArticleModel ({
		category,
		title,
		content,
		upload_date,
		author_name,
		pic,
	});

	//create Article
	createNewArticle
		.save()
		.then((createarticle) => {
			res.json(createarticle);
		})
		.catch((err) => {
			console.log(err);
		});
};


//getAllArticles
const getArticle = async (req, res) => {
	try {
		const cors = await ArticleModel.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};


//updateArticle
const updateArticle = async (req, res) => {
	const articleId = req.params.id;

	try {
		const cRs = await ArticleModel.findById(articleId);

		if (!cRs) {
			return res.status(404).json("There is a no Article !");
		}

		const {
			category,
			title,
			content,
			upload_date,
			author_name,
			pic,
		} = req.body;

		const cor = await ArticleModel.findByIdAndUpdate(articleId, {
			category,
			title,
			content,
			upload_date,
			author_name,
			pic,
		});

	} catch (error) {
		res.status(400).json(error.message);
	}
};

//deleteArticle
const removerArticle = async (req, res) => {
	const articleId = req.params.id;

	try {
		const crs = await ArticleModel.findById(articleId);
		if (!crs) {
			return res.status(404).json("There is no article to remove");
		}

		const removerArticle = await ArticleModel.findByIdAndDelete(articleId);
		res.status(200).json(removerArticle);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addArticle,
	getArticle,
	updateArticle,
	removerArticle,
};
