import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {  listSupportInnoation } from '../../actions/innovationSupportAction'
import { Card } from 'react-bootstrap';
import Sidebar from '../Admin/Sidebar';

const InnovationSupportReportList = React.forwardRef((props, ref) => {

 const dispatch = useDispatch();
 const innovationSupportList = useSelector((state) => state.innovationSupportList);
 const { loading,innovationSup,error} = innovationSupportList; 

  useEffect(() => {
      dispatch(listSupportInnoation())
    }, [dispatch])


  return (
    
    <div className="admin-dashboard">
       
          <div className="admin-content">
        <div className="admin-header">
          <h1 style={{marginTop:'70px', marginLeft:"400px"}}>All Suppotors Report</h1>
        </div>

          <div className="content-box"
           style={{backgroundColor:"#f5f5f0",width:"900px", marginLeft:"200px"}}>
           
            <table ref={ref} className="order-table">
              <thead>
                <tr>
                  <th >Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Price</th>
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
                </tr>
                    ))
      }
              </tbody>

               <Card.Footer className="text-muted mt-5 mx-5">
          Creating on - {new Date().toLocaleDateString()}
       </Card.Footer>
              
            </table>
          </div>

      </div>
    </div>
  )
}
)

export default InnovationSupportReportList