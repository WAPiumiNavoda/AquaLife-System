import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {
  denyArticleAction,
  setApprovedData
} from '../../actions/articleActions'

const ArticleApprove = () => {
    //deny innovation
    //  const dispatch = useDispatch();
    // useSelector((state) => state.innovationDeny);
    // const denyInnovation = (id) =>{
    //   dispatch(denyInnovationAction(id));
    // }

    // const { data } = useSelector((state) => state.innovationDeny);
    // const approveListInnovation = () =>{
    //    const approvedData = data.fillter((item) => item.status === 'approved');
    //    dispatch(setApprovedData(approvedData));
    //    setTimeout(function () {
	// 			window.location.href = "/innovationApprove";
	// 		}, 2000);
    // }

     const articleApproveOne = useSelector((state) => state.articleSet);
     const { loadings,updatedData,errors} = articleApproveOne; 

     const [approvedData, setApprovedData] = useState([]);

  useEffect(() => {
    fetchApprovedData();
  }, []);

  const fetchApprovedData = async () => {
    try {
      const response = await axios.get('/api/article/list');
      const data = response.data;
      setApprovedData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [approvedArticles, setapprovedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
  const fetchApprovedArticles = async () => {
    try {
      const response = await fetch('/api/article/approved');
      const data = await response.json();
      setapprovedArticles(data.approvedArticles);
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Handle error
      setLoading(false);
    }
  };

  fetchApprovedArticles();
}, []);

  return (

  

    <div className="admin-dashboard">
       <Sidebar />

          <div className="admin-content">

            
        <div className="admin-header">
          <h1>All Approved Articles</h1>
        </div>
       
        <div className="admin-content-area" >
          <div className="content-box" style={{backgroundColor:"#f5f5f0"}}>
            <p className="content-box-description">
            </p>

            <table className="order-table">
              <thead>
                <tr>
                  <th >Type</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th >Image</th>
                  <th>File</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {approvedArticles.map((article) => (
                <tr>
                <td>{article.articleType}</td>
                 <td>
                <div className="user-actions">
                  <button variant="outline-success">Approve</button>
                  <button className="btn btn-danger">Deny</button>
                </div>
              </td>
                </tr>
                 ))}
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleApprove