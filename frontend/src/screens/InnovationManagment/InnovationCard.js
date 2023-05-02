import React ,{useEffect,useState}from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import {listInnoation} from '../../actions/innovationActions'
import Table from 'react-bootstrap/Table';

const InnovationCard = ({history,search}) => {

 const dispatch = useDispatch();
 const innovationList = useSelector((state) => state.innovationList);
 const { loading,innovation,error} = innovationList; 

 const user_Login = useSelector(state =>state.user_Login)
const { userInfo } = user_Login;

 
    useEffect(() => {
      dispatch(listInnoation())
    }, [dispatch])

  return (

<div>
   {
      innovation?.reverse().map((innovation,index)=>(  
    <Row className='m-5 shadow p-3 mb-5 bg-body rounded'>
        <Col>
           <p className='pt-3 mx-5' style={{fontSize:'30px'}}>{innovation.innovationType}</p>
           <p className='pt-0 mx-5' style={{fontSize:'20px'}}>{innovation.innovationTitle}</p>
           <p className='pt-0 mx-5' style={{fontSize:'15px'}}>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do{innovation.innovationDes}</p>
           <Button className='px-5' style={{marginLeft:'90px'}}>Learn More</Button>
         </Col>
         <Col className=' text-center'>
         <Image 
          src="https://i.ibb.co/7Jt1bHD/images.jpg" 
          class="rounded float-right w-80" 
          style={{width: '30%'}} 
          alt="image" />
         </Col>
    </Row>
        
        ))
      }

     {/* <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
         innovation?.reverse().map((innovation,index)=>(
        <tr>
          <td>{index+1}</td>
          <td><img
                  style={{
                    objectFit: "cover",
                    height: "50px",
                  }}
                  src={innovation.pic}
                  // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                  alt=""
                /></td>
          <td>{innovation.innovationType}</td>
          <td>{innovation.price}</td>
          <td>{innovation.category}</td>
          <td>
              <Button href= "#" className="mx-4">Edit</Button>
              <Button variant="danger">
                Delete
              </Button>
          </td>
        </tr>
        
        ))
      }
      </tbody>
    </Table> */}

</div>


  )
}

export default InnovationCard