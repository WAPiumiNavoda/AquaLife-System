import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import { useDispatch,useSelector } from 'react-redux';
import {
  listInnoation, 
  deleteInnoAction,
  approveInnovationAction,
  denyInnovationAction,
  setApprovedData
} from '../../actions/innovationActions';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

const InnovationAdmin = () => {


  //list all inovation
 const dispatch = useDispatch();
 const innovationList = useSelector((state) => state.innovationList);
 const { loading,innovation,error} = innovationList; 
   const [ProductSearch , setSearch] = useState("");

  useEffect(() => {
      dispatch(listInnoation())
    }, [dispatch])

  //approve innovation
  //email send
  const form = useRef();
  const formRef = useRef();

  const sendEmail = () => {

    emailjs
      .sendForm(
        "service_c2xbm9h",
        "template_iqfpnjo",
         form.current,
        "pmBrDg1YWasbFz2ho"
      )
      .then(
        (result) => {
         swal({
			title: "Success !!!",
			text: "Innovation details approved",
			icon: "success",
			timer: 2000,
			button: false,
		});
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    const deleteHandler = (id) => {
    dispatch(deleteInnoAction(id))
  };

  const denyInnovation = (id) => {

    emailjs
      .sendForm(
        "service_c2xbm9h",
        "template_i2njnhi",
         formRef.current,
        "pmBrDg1YWasbFz2ho"
      )
      .then(
        (result) => {
            swal({
			title: "Success !!!",
			text: "Innovation details deny",
		  icon: 'warning',
			timer: 2000,
			button: false,
		});
    deleteHandler(id);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   <div className="admin-dashboard">
       <Sidebar />

          <div className="admin-content">

            
        <div className="admin-header">
          <h1 style={{ marginLeft: "190px"}}>All Innovation Requests</h1>
        </div>

          <input type="text"
   placeholder="Search.." 
   
   className="text111"
   name="search2"
   onChange ={(e)=>{
       setSearch(e.target.value);
   }}
   style={{backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    width: "400px",
    height: "30px",
    marginLeft: "190px",
    padding: "5px 10px",
    borderRadius: "5px"}}
  />

  <br/>
        <div className="admin-content-area" style={{paddingTop:'30px', paddingLeft:'200px'}} >
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
                {/* {
      innovation?.reverse().map((innovation,index)=>(   */}
      {innovation && innovation.filter(val=>{
                if(ProductSearch ===""){
                    return val;
                }else if(
                    val.innovationType.toLowerCase().includes(ProductSearch.toLowerCase()) ||
                    val.innovationTitle.toLowerCase().includes(ProductSearch.toLowerCase())
                ){
                    return val
                }
            }).map((innovation,index)=>(
                <tr>
                  <td>{innovation.innovationType}</td>
                  <td>{innovation.innovationTitle}</td>
                  <td>{innovation.innovationDes.slice(0, 20)}</td>
                  <td >
                    <img
                  style={{
                    objectFit: "cover",
                    height: "40px",
                    width:"60px"
                  }}
                  src={innovation.innovationImage}
                  // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                  alt=""
                />
                  </td>
                  <td>{innovation.innovationFile.slice(0, 25)}</td>
                 <td>
                <div className="user-actions">
                  <form ref={form}>
                  <button type="button" class="btn btn-outline-primary"  fdprocessedid="3ah475" ref={form} onClick={sendEmail}>Approve</button>
                  </form>
                  <form ref={formRef}>
                  <button type="button" class="btn btn-outline-danger" fdprocessedid="eb6yb" ref={formRef} onClick={()=>denyInnovation(innovation._id)} >Deny</button>
                  </form>
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

export default InnovationAdmin