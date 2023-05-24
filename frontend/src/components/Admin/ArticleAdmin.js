import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {
        listArticle,
        approveArticleAction,
        denyArticleAction,
        setApprovedData,
} from '../../actions/articleActions'



  const ArticleAdmin = () => {

  //list all articles
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading,article,error} = articleList; 

  useEffect(() => {
      dispatch(listArticle())
    }, [dispatch])

  //approve article request
  // const articleApproveOne = useSelector((state) => state.articleApprove);
  // const {loadings,articleApprove, errors} = articleApproveOne;

  const approveArticle = (id) =>{
    dispatch(approveArticleAction(id))
  }

  //deny article request
  useSelector((state) => state.articleDeny);
    const denyArticle = (id) => {
      dispatch(denyArticleAction(id));
    }
  const { data } = useSelector((state) => state.articleDeny);


//approve article request
  const approveListArticle = () =>{
      const approveArticleAction = data?.filter((item) => item.status === 'approved');
      dispatch(setApprovedData(approveArticleAction));
      setTimeout(function () {
      window.location.href = "/ArticleApprove";
    }, 2000);
  }


  return (

    <div className="admin-dashboard">
    <Sidebar />

       <div className="admin-content">

         
     <div className="admin-header">
       <h1>All Article Requests</h1>
     </div>

      <button 
      className="btn btn-primary mb-3" 
      onClick={approveListArticle}>Approve List</button>

     {}

     <div className="admin-content-area" >
       <div className="content-box" style={{backgroundColor:"#f5f5f0"}}>
         <h2 className="content-box-title">Authors Requests</h2>
         <p className="content-box-description">
           You can delete or approve article submitions request according to the 
           suitable conditions
         </p>

         <table className="order-table">
           <thead>
             <tr>
               <th >Category</th>
               <th>Title</th>
               <th>Description</th>
               <th >Author</th>
               <th>Image</th>
                <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {
   article?.reverse().map((article,index)=>(  
             <tr>
               <td>{article.articleType}</td>
               <td>{article.articleTitle}</td>
               <td>{article.articleContent}</td>
               <td>{article.authorName}</td>
               <td >
                    <img
                  style={{
                    objectFit: "cover",
                    height: "40px",
                    width:"60px"
                  }}
                  src={article.articleImage}
                  alt=""
                /></td>
              <td>
             <div className="user-actions">
               <button type="button" class="btn btn-outline-primary" fdprocessedid="3ah475" onClick={() => approveArticle(article._id)}>Approve</button>
               <button type="button" class="btn btn-outline-danger" fdprocessedid="eb6yb" onClick={() => denyArticle(article._id)}>Deny</button>
             </div>
           </td>
             </tr>
                 ))
   }
           </tbody>
           
         </table>
       </div>
     </div>
   </div>
 </div>

  )
}

export default ArticleAdmin