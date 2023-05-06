import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {listInnoation} from '../../actions/innovationActions'

const InnovationAdmin = () => {

  const dispatch = useDispatch();
 const innovationList = useSelector((state) => state.innovationList);
 const { loading,innovation,error} = innovationList; 

  useEffect(() => {
      dispatch(listInnoation())
    }, [dispatch])

  return (
   <div className="admin-dashboard">
       <Sidebar />

          <div className="admin-content">
        <div className="admin-header">
          <h1>All Innovation Requests</h1>
        </div>

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
            <h2 className="content-box-title">Innovation Requests</h2>
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
                {
      innovation?.reverse().map((innovation,index)=>(  
                <tr>
                  <td>{innovation.innovationType}</td>
                  <td>J{innovation.innovationTitle}</td>
                  <td>{innovation.innovationDes}</td>
                  <td >{innovation.innovationImage}</td>
                  <td>{innovation.innovationFile}</td>
                 <td>
                <div className="user-actions">
                  <button className="btn btn-primary">Approve</button>
                  <button className="btn btn-danger">Deny</button>
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

export default InnovationAdmin