import React ,{useEffect,useState}from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import {listArticle} from '../../actions/articleActions'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../ArticleManagement/About/style.css"


const AllArticle = () => {

  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading,article,error} = articleList; 
  const navigate = useNavigate();
  const [FrontArticle, setFrontArticle] = useState([]);
  const user_Login = useSelector(state =>state.user_Login)
  const { userInfo } = user_Login;
 
  const [articleType, setarticleType] = useState("");
  const [articleTitle, setarticleTitle] = useState("");
  const [articleContent, setarticleContent] = useState("");
  const [authorName, setauthorName] = useState("");
  const [dateofPublish, setdateofPublish] = useState();
  const [articleImage, setarticleImage] = useState();
 
  
     useEffect(() => {
       dispatch(listArticle())
     }, [dispatch])
 

  return (
    <div>
    {
       article?.reverse().map((article,index)=>(  
        <div class="cardview">
            <div>
             <img class="card-img-center" src={article.articleImage} alt="Card image cap"/>
            </div><br></br>
            <div>
               <h3 class="card-title">{article.articleTitle}</h3>
            </div>
               <br></br>
               <p>{article.articleContent}</p>
            <div>
             <Button type="submit" href= {`/oneArticle/${article._id}`} style={{
                width:"100px",
                height:"35px"
             }} class="btn btn-success">Read More</Button>
            </div>
        </div>        
         ))
       }
 
 </div>
  )
}

export default AllArticle