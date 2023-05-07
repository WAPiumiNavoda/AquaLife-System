import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {listArticle} from '../../actions/articleActions'

const ArticleAdmin = () => {

  const dispatch = useDispatch();
 const articleList = useSelector((state) => state.articleList);
 const { loading,article,error} = articleList; 

  useEffect(() => {
      dispatch(listArticle())
    }, [dispatch])

  return (

   <div className="admin-dashboard">
       <Sidebar />

          <div className="admin-content">
        <div className="admin-header">
          <h1>All Article Requests</h1>
        </div>

        <div className="admin-content-area" >
          <div className="content-box" style={{backgroundColor:"#f5f5f0"}}>
            <h2 className="content-box-title">Article Requests</h2>
            <p className="content-box-description">
              You can delete or approve Article submitions according to the 
              suitable conditions
            </p>

            <table className="order-table">
              <thead>
                <tr>
                    <th >Category</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th >Author Name</th>
                    <th>Date of Submit</th>
                </tr>
              </thead>
              <tbody>
                {
      article?.reverse().map((article,index)=>(  
                <tr>
                    <td>{article.articleType}</td>
                    <td>J{article.articleTitle}</td>
                    <td>{article.articleContent}</td>
                    <td>{article.articleDateofSubmit}</td>
                 <td>
                <div className="user-actions">
                  <button className="btn btn-primary">Publish</button>
                  <button className="btn btn-danger">Deny</button>
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

export default ArticleAdmin;