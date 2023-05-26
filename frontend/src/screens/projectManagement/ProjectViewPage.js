import React from "react";
import { listProjects } from "../../actions/projectsActions";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./project.css"


const ProjectView = ({history,search,props}) => {

    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const { loading,project,error} = projectList; 
    console.log("project",project)

    const navigate = useNavigate();

    useEffect(() => {
         dispatch(listProjects())
       }, [dispatch])
   
    // project?.map((data) =>{
    //     console.log("checkedMapData",data)
    // })   
   
    return (
      
        <>
      <br/><br/>
      <div className="card-header">
         <h2 className='m-4' style={{ fontSize: '55px', color: "#57aade",textAlign:"center" }}>Our Available Projects</h2>
        <div className="card-header-text" style={{ fontSize: '25px',color: "#57aade",textAlign:"center"   }}>
          Online platforms provide a unique opportunity to support critical water projects around the world. From drilling wells in areas without access to clean drinking water to implementing water conservation initiatives in drought-prone regions, these projects are crucial to improving the quality of life for communities in need. By contributing to a water project that resonates with you, you can play a vital role in ensuring that everyone has access to this essential resource. Join the movement and help make a difference today.
        </div>
      </div>
      

    <div className="container">
      <div className="row">
        {project && project.map((p) => (
          <div className="col-md-3" key={p.id}>
            <div className="card bg-light mb-5 h-100">
           
              <img src={p.photo} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="card-text">{p.price}</p>
               
              </div>
              <a href="/selection/${p.id}" className="btn btn-primary">Donate</a>
            </div>
          </div>
        ))
        }
             

      </div>
    </div>
  </>
);


       

      
        
  
      

  
              }


export default ProjectView
