import { projectDelete as deleteProject } from "../../actions/projectsActions"; // Rename the imported action
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProjects} from "../../actions/projectsActions";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Button, Form } from "react-bootstrap";
import Sidebar from "../Admin/Sidebar";

const ProjectList = React.forwardRef((props, ref) => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projectList = useSelector((state) => state.projectList);
  const { loading, project, error } = projectList;

  const projectDeleteState = useSelector((state) => state.projectDelete);
  const { success: successDelete } = projectDeleteState;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch, successDelete]);

  const filteredProjects = project && project.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="admin-dashboard">
     
      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginTop: "20px", marginLeft: "800px",fontFamily:"poppins",fontSize:"50px" }}>Projects List</h1>
        </div>
      <br/>

        <div className="table-container">
          <table ref={ref} className="table table-bordered table-striped" >
            <thead className="thead-dark">
              <tr>
                <th>Project Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects && filteredProjects.map((p) => (
                <tr key={p.id}>
                  <td><img src={p.photo} alt="Project" style={{ width: "150px", height: "150px" }} /></td>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
})

export default ProjectList;


