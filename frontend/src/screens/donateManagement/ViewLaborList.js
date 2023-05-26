import { laborDelete } from "../../actions/donateActions"; // Rename the imported action
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Button, Form } from "react-bootstrap";
import { listDonateLabor } from "../../actions/donateActions";

const LaborList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const laborList = useSelector((state) => state.laborList);
  const { loading, labor, error } = laborList;

  const laborDeleteState = useSelector((state) => state.laborDelete);
  const { success: successDelete } = laborDeleteState;

  useEffect(() => {
    dispatch(listDonateLabor());
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
          dispatch(laborDelete(id));
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

  const filteredLabor = labor && labor.filter(L => L.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
   
     
        <><div>
          <h1 style={{ marginTop: "90px", marginLeft: "650px",fontFamily:"poppins",fontSize:"60px"}}>Human Labor List</h1>
      </div><div className="search-bar">
              <Form>
                  <Form.Control
                      type="text"
                      placeholder="Search by project name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                      style={{ width: "400px", marginLeft: "1400px" }} // Add width style to the input
                  />
              </Form>
          </div><br /><div className="table-container">
              <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                      <tr>
                          <th>Project Name</th>
                          <th>Email</th>
                          <th>Name</th>
                          <th>Available Date</th>
                          <th>Country</th>
                          <th>Contact Number</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {filteredLabor && filteredLabor.map((L) => (
                          <tr key={L.id}>
                              <td>{L.name}</td>
                              <td>{L.email}</td>
                              <td>{L.userName}</td>
                              <td>{L.availableDate}</td>
                              <td>{L.country}</td>
                              <td>{L.phone}</td>

                              <td>
                                  <div className="d-flex">
                                      <Button
                                          style={{
                                              marginLeft: 20,
                                              float: "left",
                                              fontSize: 18,
                                              marginTop: 20,
                                          }}
                                          href={`/labor/${L._id}`}
                                      >
                                          Edit
                                      </Button>
                                      <Button
                                          variant="danger"
                                          className="mx-2"
                                          style={{ marginLeft: 20, float: "left", fontSize: 18, marginTop: 20 }}
                                          onClick={() => deleteHandler(L._id)}
                                      >
                                          Delete
                                      </Button>
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div></>
      
  );
};

export default LaborList;