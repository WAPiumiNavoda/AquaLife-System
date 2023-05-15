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
      window.location.href = "/articleApprove";
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

     {/* <div className="admin-metrics">
       <div className="metric">
         <div className="metric-icon">
           <FaUser />
         </div>
         <div className="metric-details">
           <p className="metric-title">Total Users</p>
           <p className="metric-number">3</p>
         </div>
       </div>

       <div className="metric">
         <div className="metric-icon">
           <FaProductHunt />
         </div>
         <div className="metric-details">
           <p className="metric-title">Total Products</p>
           <p className="metric-number">10</p>
         </div>
       </div>

       <div className="metric">
         <div className="metric-icon">
           <FaUser />
         </div>
         <div className="metric-details">
           <p className="metric-title">Total Customers</p>
           <p className="metric-number">2</p>
         </div>
       </div>
     </div> */}

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
                <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {
   article?.reverse().map((article,index)=>(  
             <tr>
               <td>{article.articleType}</td>
               <td>J{article.articleTitle}</td>
               <td>J{article.articleContent}</td>
               <td>J{article.authorName}</td>
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

       {/* <div className="content-box">
         <h2 className="content-box-title">Recent Users</h2>
         <p className="content-box-description">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>

         <ul className="user-list">
           <li>
             <div className="user-details">
               <h3 className="user-name">John Smith</h3>
               <p className="user-email">john.smith@example.com</p>
             </div>
             <div className="user-actions">
               <button className="btn btn-primary">Edit</button>
               <button className="btn btn-danger">Delete</button>
             </div>
           </li>

           <li>
             <div className="user-details">
               <h3 className="user-name">Jane Doe</h3>
               <p className="user-email">jane.doe@example.com</p>
             </div>
             <div className="user-actions">
               <button className="btn btn-primary">Edit</button>
               <button className="btn btn-danger">Delete</button>
             </div>
           </li>

           <li>
             <div className="user-details">
               <h3 className="user-name">Bob Johnson</h3>
               <p className="user-email">bob.johnson@example.com</p>
             </div>
             <div className="user-actions">
               <button className="btn btn-primary">Edit</button>
               <button className="btn btn-danger">Delete</button>
             </div>
           </li>
         </ul>
       </div> */}
     </div>
   </div>
 </div>

  )
}

export default ArticleAdmin