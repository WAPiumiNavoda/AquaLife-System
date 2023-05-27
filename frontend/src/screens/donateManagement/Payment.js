import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { createPayement } from "../../actions/donateActions";


export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [donatePrice, setDonatePrice] = useState("");
  const [country, setCountry] = useState("");

 const dispatch = useDispatch();

  const paymentCreate = useSelector((state) => state.paymentCreate);
  const { loading, payment ,error} = paymentCreate;

 
  //submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPayement( cardNumber,cardName,email,date,cvc,donatePrice,country, ));
  };


    // Create the data object
    const formData = {
      cardNumber,
      cardName,
      email,
      date,
      cvc,
      donatePrice,
      country,
    };





  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <br/><br/>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3" style={{ marginLeft: "200px" }}>
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="Mastercard"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="cardNumber"
                      type="number"
                      size="lg"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <MDBInput
                label="Cardholder's Name"
                id="cardName"
                type="text"
                size="lg"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              <MDBInput
                label="Email"
                id="email"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Date"
                id="date"
                type="date"
                size="lg"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <MDBInput
                label="CVC"
                id="cvc"
                type="number"
                size="lg"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
              />
              <MDBInput
                label="Donate Price"
                id="donatePrice"
                type="number"
                size="lg"
                value={donatePrice}
                onChange={(e) => setDonatePrice(e.target.value)}
              />
              <MDBInput
                label="Country"
                id="country"
                type="text"
                size="lg"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <MDBBtn color="success" size="lg" block onClick={submitHandler}>
                Add card
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
    }

