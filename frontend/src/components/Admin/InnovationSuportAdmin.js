import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { FaUser, FaProductHunt } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux';
import {  listSupportInnoation } from '../../actions/innovationSupportAction'
import { Button } from 'react-bootstrap';
const InnovationSuportAdmin = () => {

 const dispatch = useDispatch();
 const innovationSupportList = useSelector((state) => state.innovationSupportList);
 const { loading,innovationSup,error} = innovationSupportList; 

  useEffect(() => {
      dispatch(listSupportInnoation())
    }, [dispatch])


  return (
    <div className="admin-dashboard">
          <Sidebar />

          <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft:"100px"}}>All Suppotors</h1>
        </div>

 <Button href='/innovationReport' style={{marginLeft: 5,marginBottom:'10px'}} size='sm'>Genarate Report</Button>
          <div className="content-box"
           style={{backgroundColor:"#f5f5f0",width:"900px", marginLeft:"100px"}}>
            <h2 className="content-box-title">List Of Requests</h2>
            <p className="content-box-description">
              You can delete or approve innovation submitions according to the 
              suitable conditions
            </p>

            <table className="order-table">
              <thead>
                <tr>
                  <th >Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
      innovationSup?.reverse().map((innovationSup,index)=>(  
                <tr>
                  <td>{innovationSup.suppotorName}</td>
                  <td>{innovationSup.suppotorEmail}</td>
                  <td>{innovationSup.supportorPhone}</td>
                  <td>{innovationSup.price}</td>
                 
                <td className="user-actions">
                  <button class="btn btn-outline-primary" fdprocessedid="3ah475">Approve</button>
                  <button class="btn btn-outline-danger" fdprocessedid="eb6yb">Delete</button>
                </td>
              
                </tr>
                    ))
      }
              </tbody>
              
            </table>
          </div>

      </div>
    </div>
  )
}

export default InnovationSuportAdmin