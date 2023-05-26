import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from '../../components/ErrorMessage';
import { createArticleAction } from '../../actions/articleActions';
import { useDispatch, useSelector } from "react-redux";
import "../ArticleManagement/About/style.css"

const ArticleForm = () => {

  const [articleType, setarticleType] = useState("");
  const [articleTitle, setarticleTitle] = useState("");
  const [articleContent, setarticleContent] = useState();
  const [authorName, setauthorName] = useState();
  const [dateofPublish, setdateofPublish] = useState();
  const [articleImage, setarticleImage] = useState();
  const [picMessage, setPicMessage] = useState(null);
  const [errors, setErrors] = useState({});

   
  const dispatch = useDispatch();

  const articleCreate = useSelector((state) => state.articleCreate);
  const { loading, article ,error} = articleCreate;

  const postDetails = (pics) => {

    //Input fields Validation
    let errors = {};

    if(!articleType){
      errors.articleType = "Article Type should be enter ";
    }
    if(!articleTitle){
      errors.articleTitle = "Article Title should be enter ";
    }
    if(!articleContent){
      errors.articleContent = "Article Content should be Fuillfield ";
    }
    if(!authorName){
      errors.authorName = "Article Author's Name should be enter ";
    }
  

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setarticleImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  //submit form
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createArticleAction(  articleType,articleTitle, articleContent,authorName, dateofPublish, articleImage ));
  };

  return (
    <>
       <h1 style={{textAlign: "center", color:"#1D267D"}}>Submit Your Article Request</h1>
          <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="https://i.ibb.co/NF1RFRX/article-writing.jpg"
              alt="Image"
              style={{height:"400px",width:'700px',paddingRight:'50px',paddingTop:"5px"}}
              class="img-fluid"/>
            </div>
    <div class="col-md-6">

       <Form onSubmit={submitHandler}>

            <Form.Group controlId="title">
              <Form.Label>Article Category</Form.Label>
              <Form.Control
                type="title"
                value={articleType}
                placeholder="Enter article Type"
                onChange={(e) => setarticleType(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Article Title</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter article type"
                value={articleTitle}
                onChange={(e) => setarticleTitle(e.target.value)}
                required
              />
            </Form.Group>

              <Form.Group controlId="title">
               <Form.Label>Article Content</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the article content"
                value={articleContent}
                onChange={(e) => setarticleContent(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Author of Publish</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the Author's name"
                value={authorName}
                onChange={(e) => setauthorName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Date of Publish</Form.Label>
               <Form.Control
                type="date"
                placeholder="Enter the Date"
                value={dateofPublish}
                onChange={(e) => setdateofPublish(e.target.value)}
                required
              />
            </Form.Group>

              {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}

          <Form.Group controlId="pic">
            <Form.Label>Article Image</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload article Image"
              onChange={(e) => postDetails(e.target.files[0])}
              custom
            />
          </Form.Group>

            <Button type="submit" variant="primary" className="my-4">
                Create Article Request
            </Button>
        </Form>
    </div>
  </div>
</div>
</>
  )
}

export default ArticleForm