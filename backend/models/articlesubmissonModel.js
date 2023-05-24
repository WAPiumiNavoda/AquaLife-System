const mongoose = require('mongoose');

const articleSubmissionSchema = new mongoose.Schema(
  {
    articleType: {
      type: String,
      required: true,
    },

    articleImage:{
      type:String,
      default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    articleTitle: {
      type: String,
      required : true,
    },

    articleContent: {
      type: String,
      required: true,
    },

    authorName:{
      type:String,
      required: true,
    },

    dateofPublish:{
      type:String,
      required: true,
    },

    IsApproved: {
			type: Boolean,
		},
    
  },
  {
    timestamps: true,
  }
);

const ArticleSubmission = mongoose.model("ArticleSubmission", articleSubmissionSchema);

module.exports = ArticleSubmission;