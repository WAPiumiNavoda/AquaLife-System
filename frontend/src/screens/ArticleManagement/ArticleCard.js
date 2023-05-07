import React ,{useEffect,useState}from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import {listArticle} from '../../actions/articleActions'
import Table from 'react-bootstrap/Table';

const ArticleCard = ({history,search}) => {

 const dispatch = useDispatch();
 const articleList = useSelector((state) => state.articleList);
 const { loading,article,error} = articleList; 

 const user_Login = useSelector(state =>state.user_Login)
const { userInfo } = user_Login;

 
    useEffect(() => {
      dispatch(listArticle())
    }, [dispatch])

  return (

<div>
   {
      article?.reverse().map((article,index)=>(  
    <Row className='m-5 shadow p-3 mb-5 bg-body rounded'>
        <Col>
           <p className='pt-3 mx-5' style={{fontSize:'30px'}}>{article.articleType}</p>
           <p className='pt-0 mx-5' style={{fontSize:'20px'}}>{article.articleTitle}</p>
           <p className='pt-0 mx-5' style={{fontSize:'15px'}}>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do{article.articleDes}</p>
           <Button className='px-5' style={{marginLeft:'90px'}}>Learn More</Button>
         </Col>
         <Col className=' text-center'>
         <Image 
          src="https://lh3.googleusercontent.com/_VynPK3wauy6ESwA5ccm3GmQNMM2ljuCZRsWo2v6pHIia0zoo2mvU96MHv8XFrvG54IraB1GfLEwpmZM1LgWHRg82PHFXL69guEWcBzex-JlI39cNU5_lmgQDdn6P0K_MWFd6Jnh" 
          class="rounded float-right w-80" 
          style={{width: '30%'}} 
          alt="image" />
         </Col>
    </Row>
        
        ))
      }

     {/* <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
         innovation?.reverse().map((innovation,index)=>(
        <tr>
          <td>{index+1}</td>
          <td><img
                  style={{
                    objectFit: "cover",
                    height: "50px",
                  }}
                  src={innovation.pic}
                  // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                  alt=""
                /></td>
          <td>{innovation.innovationType}</td>
          <td>{innovation.price}</td>
          <td>{innovation.category}</td>
          <td>
              <Button href= "#" className="mx-4">Edit</Button>
              <Button variant="danger">
                Delete
              </Button>
          </td>
        </tr>
        
        ))
      }
      </tbody>
    </Table> */}

</div>


  )
}

export default ArticleCard