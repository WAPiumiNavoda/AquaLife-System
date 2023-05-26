import React,{useState,useEffect} from 'react'
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css"
import { createLabors } from '../../actions/donateActions';
import Loading from "../../components/Loading";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const LabourCreate = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [myArrayName, setMyArrayName] = useState([]);

  useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`http://localhost:5000/user/admin/getProjects`, {
		
			});
			setMyArrayName(data);
		};

		fetching();
	});

 
  const dispatch = useDispatch();

  const laborCreate = useSelector((state) => state.laborCreate);
  const { loading, project ,error} = laborCreate;

 
  //submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createLabors( name,email,userName,availableDate,country,phone ));
  };

  return (
    <>
   <br/><br/>
      <div className="card-header">
         <h2 className='m-4' style={{ fontSize: '55px', color: "#57aade",textAlign:"center" }}>Add your Details</h2>
        <div className="card-header-text" style={{ fontSize: '25px',color: "#57aade",textAlign:"center"   }}>
          Online platforms provide a unique opportunity to support critical water projects around the world. From drilling wells in areas without access to clean drinking water to implementing water conservation initiatives in drought-prone regions, these projects are crucial to improving the quality of life for communities in need. By contributing to a water project that resonates with you, you can play a vital role in ensuring that everyone has access to this essential resource. Join the movement and help make a difference today.
        </div>
      </div>

          <div class="container p-5">

          <div>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading />}
          </div>

              <div class="row">
                  <div class="col-md 5">
                      <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/06/14175932/A-guide-to-water-conservation-methods-and-its-importance-FB-1200x700-compressed.jpg" alt="Image" class="img-fluid" />
                  </div>
                  <div class="col-md-6">

                      <Form onSubmit={submitHandler}>
                     

                    <Form.Group controlId="projects">
                          <Form.Label>Select Project</Form.Label>
                          <select
                            style={{
                              height: "30px",
                              width: "100%",
                              borderRadius: 5,
                              borderColor: "#808080",
                              borderWidth: 0.5,
                            }}
                            onChange={(e) => setName(e.target.value)}
                          >
                            <option value="Select">Select</option>
                            {myArrayName.map((project) => (
                              <option value={project.name}>{project.name}</option>
                            ))}
                          </select>
                          </Form.Group>


                          <Form.Group controlId="title">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                  type="email"
                                  value={email}
                                  placeholder="Enter Your Email"
                                  onChange={(e) => setEmail(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="title">
                              <Form.Label>User Name</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Enter Your Name"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="title">
                              <Form.Label>Avalable Date</Form.Label>
                              <Form.Control
                                  type="date"
                                  placeholder="Enter the date"
                                  value={availableDate}
                                  onChange={(e) => setAvailableDate(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="title">
                              <Form.Label>Country</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Enter the date"
                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)} />
                          </Form.Group>

                         <Form.Group controlId="title">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                  type="number"
                                  placeholder="Enter the phone number"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)} />
                          </Form.Group>


                          <Button type="submit" variant="primary" className="my-4">
                              Submit
                          </Button>
                          <Link to="/laborList" className="btn btn-success ml-9 my-4 custom-button" style={{ fontSize:'18px', marginLeft:"30px", backgroundColor: 'green', height: '40px',width:'120px'}}>
                              View List
                         </Link>

                      </Form>
                  </div>
              </div>
          </div>
      </> 

  )
}


export default LabourCreate