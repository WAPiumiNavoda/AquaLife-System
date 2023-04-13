const express = require("express");
const router = express.Router();
const { addArticle, getArticle, updateArticle, removerArticle } = require("../controllers/articleController");


//addArticle
router.post("/create", addArticle);

//getArticle
router.get("/getAllArticle", getArticle);

//@route PUT api/Article/:id
//@desc Update an Article
router.put("/:id", updateArticle);

//@route delete api/Article/:id
//@desc Delete an Article
router.delete("/:id", removerArticle);

module.exports = router;