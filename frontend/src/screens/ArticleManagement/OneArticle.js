import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import { Form } from "react-bootstrap";
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const OneArticle = ({match,props}) => {


  const [articleType, setarticleType] = useState();
  const [articleTitle, setarticleTitle] = useState("");
  const [articleContent, setarticleContent] = useState("");
  const [authorName, setauthorName] = useState("");
  const [dateofPublish, setdateofPublish] = useState();
  const [articleImage, setarticleImage] = useState();
  const { id } = useParams();


  //get one article
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`http://localhost:5000/article/${id}`);

    setarticleType(data.articleType);
    setarticleTitle(data.articleTitle);
    setarticleContent(data.articleContent);
    setauthorName(data.authorName);
    setdateofPublish(data.dateofPublish);
    setarticleImage(data.articleImage);
    };

    fetching();

  }, [id]);




  return (

    <div>
    <Row className='mx-5 shadow  mb-5 bg-body rounded' style={{width:"1450px", marginTop:"100px"}}>
        <Col>
        <h3 className='px-5 pb-2' style={{fontSize:"45px"}}>{articleType}</h3>

        <p className='px-5' 
        style={{fontSize:"25px"}}>{articleTitle}</p> 
           <p className='pt-4 mx-5 pb-4'>
               {articleContent} </p>
               <img src={articleImage} style={{paddingLeft:'40px', width:"400px"}} />
         </Col>
         <Col 
         className='p-5'
         style={{backgroundColor:"#f5f5f0", marginRight:'15px'}}>
         </Col>
    </Row>
  </div>
  )
}

export default OneArticle