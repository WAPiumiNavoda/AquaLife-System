import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {
  denyInnovationAction,
  setApprovedData
} from '../../actions/innovationActions'

const InnovationApprove = () => {
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

     const innovationApproveOne = useSelector((state) => state.innovationSet);
     const { loadings,updatedData,errors} = innovationApproveOne; 

     const [approvedData, setApprovedData] = useState([]);

  useEffect(() => {
    fetchApprovedData();
  }, []);

  const fetchApprovedData = async () => {
    try {
      const response = await axios.get('/api/innovation/list');
      const data = response.data;
      setApprovedData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [approvedInnovations, setApprovedInnovations] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
  const fetchApprovedInnovations = async () => {
    try {
      const response = await fetch('/api/innovation/approved');
      const data = await response.json();
      setApprovedInnovations(data.approvedInnovations);
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Handle error
      setLoading(false);
    }
  };

  fetchApprovedInnovations();
}, []);

  return (
    <div className="admin-dashboard">
       <Sidebar />
          <div className="admin-content">

            
        <div className="admin-header">
          <h1>All Approved Innovations</h1>
        </div>
       
        <div className="admin-content-area" >
          <div className="content-box" style={{backgroundColor:"#f5f5f0"}}>
            <p className="content-box-description">
              You can delete or approve innovation submitions according to the 
              suitable conditions
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
              {approvedInnovations.map((innovation) => (
                <tr>
                <td>{innovation.innovationType}</td>
                 <td>
                <div className="user-actions">
                  <button variant="outline-success" >Approve</button>
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

export default InnovationApprove