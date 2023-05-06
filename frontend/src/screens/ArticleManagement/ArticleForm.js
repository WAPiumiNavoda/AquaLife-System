import React, { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import '../../css/article.css';

const ArticleForm = () => {
  return (

<div class="container p-5">
  <div class="row">
    <div class="col-md-6">
      <img src="https://i.ibb.co/566ty1C/Money-for-Writers.webp" alt="Image" class="img-fluid"/>
    </div>
    <div class="col-md-6">
    <p id='Title'>Share your Knowladge with the others</p>
      <form class="form-group-article">
        <div class="form-group">
          <label for="category">Article Category:</label>
          <br/>
          <select className="dropdown_category">
            <option className="dropdown_items" value="">Select an Category</option>
            <option className="dropdown_items" value="option1">Water Pollution</option>
            <option className="dropdown_items" value="option2">Water Sanitation</option>
            <option className="dropdown_items" value="option3">Water Saving</option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Article Title:</label>
          <input type="text" class="form-control" id="title" placeholder="Enter the Title"/>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea class="form-control" id="content" rows="5" placeholder="Enter your content"></textarea>
        </div>
        <div class="form-group">
          <label for="name">Author's Name:</label>
          <textarea class="form-control" id="author's name" placeholder="Enter your Name"></textarea>
        </div>
        <div className="button_styles">
          <button type="submit" class="btn-primary-submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default ArticleForm