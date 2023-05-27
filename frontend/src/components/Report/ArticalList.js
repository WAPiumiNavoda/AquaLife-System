import React,{useState,useEffect} from 'react'
import Sidebar from '../../components/Admin/Sidebar.js'
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {
        listArticle,
        approveArticleAction,
        denyArticleAction,
        setApprovedData,
} from '../../actions/articleActions'



  const ArticleList = React.forwardRef((props, ref)=> {

  //list all articles
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading,article,error} = articleList; 

  useEffect(() => {
      dispatch(listArticle())
    }, [dispatch])



  //deny article request
  useSelector((state) => state.articleDeny);
    const denyArticle = (id) => {
      dispatch(denyArticleAction(id));
    }
  const { data } = useSelector((state) => state.articleDeny);




  return (

    <div className="admin-dashboard">
    <Sidebar />

       <div className="admin-content">

         
     <div className="admin-header">
       <h1>All Article Requests</h1>
     </div>

      {/* <button 
      className="btn btn-primary mb-3" 
      onClick={approveListArticle}>Genarate Report</button> */}

     {}

     <div className="admin-content-area" >
       <div className="content-box" style={{backgroundColor:"#f5f5f0"}}>
         <h2 className="content-box-title">Authors Requests</h2>
         <p className="content-box-description">
           You can delete or approve article submitions request according to the 
           suitable conditions
         </p>

         <table  ref={ref} className="order-table">
           <thead>
             <tr>
               <th >Category</th>
               <th>Title</th>
               <th>Description</th>
               <th >Author</th>
               <th>Image</th>
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
  )
export default ArticleList