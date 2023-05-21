import { projectDelete as deleteProject } from "../../../actions/projectsActions"; // Rename the imported action
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProjects} from "../../../actions/projectsActions";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Button, Form } from "react-bootstrap";
import "./Project.css";
import Sidebar from '../Sidebar';

const ProjectListByAdmin = () => {
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

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteProject(id));
          swal({
            title: "Success!",
            text: "Deleted Successfully",
            icon: "success",
            timer: 2000,
            button: false,
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Couldn't Delete",
          type: "error",
        });
      });
  };

  const filteredProjects = project && project.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ marginLeft: "100px", marginTop: "20px", marginLeft: "500px" }}>Projects List</h1>
        </div>

        <div className="search-bar">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search by project name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ width: "400px",marginLeft:"1000px" }} // Add width style to the input
            />
          </Form>
        </div>
        <br/>

        <div className="table-container">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Project Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects && filteredProjects.map((p) => (
                <tr key={p.id}>
                  <td><img src={p.photo} alt="Project" style={{ width: "150px", height: "150px" }} /></td>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        style={{
                          marginLeft: 20,
                          float: "left",
                          fontSize: 18,
                          marginTop: 20,
                        }}
                        href={`/project/${p._id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        style={{ marginLeft: 20, float: "left", fontSize: 18, marginTop: 20 }}
                        onClick={() => deleteHandler(p._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectListByAdmin;


