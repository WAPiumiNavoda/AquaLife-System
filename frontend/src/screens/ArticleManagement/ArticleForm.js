import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import '../../css/article.css';
import { createArticleAction } from '../../actions/articleActions';

const ArticleForm = () => {

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
   
  const dispatch = useDispatch();

  const articleCreate = useSelector((state) => state.articleCreate);
  const { loading, article ,error} = articleCreate;

  //submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createArticleAction( category,title,content,name ));
  };


  return (

  <div class="container p-5">
    <div class="row">
      <div class="col-md-6">
        <img src="https://i.ibb.co/566ty1C/Money-for-Writers.webp" alt="Image" class="img-fluid"/>
      </div>
      <div class="col-md-6">
      <p id='Title'>Share your Knowladge with the others</p>

        <Form class="form-group-article" id ="form" onSubmit={submitHandler}>

            <Form.Group controlId="category">
              <label for="category">Article Category:</label>
              <Form.Control  id="category" placeholder="Enter the category" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="title">
              <label for="title">Article Title:</label>
              <Form.Control id="title" placeholder="Enter the Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="content">
              <label for="content">Content:</label>
              <textarea class="form-control" id="message" rows="5" placeholder="Enter your Name" laceholder="Enter your content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)}></textarea>
            </Form.Group>

            <Form.Group controlId="name">
              <label for="name">Author's Name:</label>
              <Form.Control id="author's name" placeholder="Enter your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Button type="submit" variant="primary" className="my-4">Submit</Button>
            <Button className="mx-5"  variant="danger">Reset Feilds</Button>

        </Form>
      </div>
    </div>
  </div>

  )
}

export default ArticleForm