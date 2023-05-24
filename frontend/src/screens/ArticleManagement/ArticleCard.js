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

const ArticleCard = ({history,search,props}) => {

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

<div class="articleCardFrame">
   {

      article?.reverse().map((article,index)=>(  

          <div class="card" style={{width: "400px",
                                    height: "500px",
                                    margintop: "15px",
                                    padding:"5px",
                                    gridGap:"1rem",
                                    
          }}>
            <img class="card-img-top" src={article.articleImage} style={{
              width:"390px",
              height:"200px",
            }} alt="Card image cap"/>
            <div class="card-body">
              <h3>{article.articleTitle}</h3>
              <p class="card-text">{article.articleContent}</p>
            </div>
            <Button type="submit" href= {`/oneArticle/${article._id}`} class="btn btn-primary" style={{
                  marginLeft:"200px",
                 width:"100px",
                 height:"25px"
              }}>Read More</Button>
          </div>        
        ))
      }

</div>


  )
}

export default ArticleCard