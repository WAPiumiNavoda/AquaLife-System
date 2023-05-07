import React from "react";
import { useSelector } from "react-redux";
import "./aboutArticle.css";
import Button from 'react-bootstrap/Button';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const AboutArticle = () => {
   
  return (

    <>
    <div>

    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="about__page">
        {/* 1st verse */}
        <div className="row flex  rounded">
          <div className="col__2">
            <img src="https://i.ibb.co/7tWJDyC/i-Stock-1029427710.jpg"
            style={{height:"550px",width:"600px"}}
            />
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                What About Article Service
              </span>
              <p style={{
                textAlign: "justify",
              }}>
              Welcome to our article writing service! We are a team of passionate writers who are dedicated to helping businesses and individuals create high-quality, 
              engaging content that connects with their audience.Our mission is to provide a platform where writers can share their knowledge and expertise with a global audience. 
              We believe that everyone has something valuable to share, and we strive to create a community where writers from all backgrounds and industries can come together to create compelling content that educates and inspires.
              At our article writing service, we pride ourselves on our commitment to quality. 
              We understand the importance of well-written and well-researched articles in today's digital landscape, and we go above and beyond to ensure that each piece of content we create is of the highest standard.
              We offer a wide range of writing services, from SEO-optimized blog posts to technical whitepapers, and we work closely with our clients to ensure that their needs are met and their expectations exceeded. 
              Our team of writers is comprised of professionals from diverse backgrounds and industries, which allows us to offer a diverse range of writing services.
              In addition to providing writing services, we also offer a platform for writers to share their knowledge with our audience. 
              We believe that the best way to learn is by sharing knowledge, and we encourage writers to submit articles on a variety of topics, from business and marketing to personal development and health.
              </p>
              <p>
              Whether you are a seasoned writer or just starting out, we welcome you to join our community and share your knowledge with the world. 
              We believe that together, we can create a better future by sharing our experiences, insights, and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd verse */}
        <div className="second ">
          <div className="heading">
            <h2>Verious Types of Papers from one Place</h2>
          </div>
          <div className="row flex ">
            <div className="col__3">
              <div
                className="shadow p-3 mb-5 bg-body bg-light rounded"
                style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div>
                  <img className = "col_3_img" src="https://i.ibb.co/XXHpp2Z/bottles-garbage-lake.webp" />
                </div>
                <span>Water Polutions</span>
                <p style={{
                  textAlign: "justify",
                }}>
                Water pollution is the contamination of water bodies, such as rivers, lakes, oceans, and groundwater, with harmful substances. It is a serious global issue that affects not only aquatic ecosystems but also human health and the economy. Water pollution can be caused by a wide range of sources, including industrial activities, agricultural runoff, sewage discharge, and oil spills.
                </p>
                <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                  marginLeft:"200px",
              }}>Read More</Button>
              </div>
            </div>

            <div className="col__3">
                <div
                className="shadow p-3 mb-5 bg-body bg-light rounded"
                style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div>
                  <img className = "col_3_img" src="https://i.ibb.co/SKf396Z/Why-It-Matters-Clean-Water-and-Sanitation.png" />
                </div>
                <span>Water Sanitation</span>
                <p style={{
                  textAlign: "justify",
                }}>
                  Water sanitation refers to the process of providing safe, clean, and hygienic water for human consumption and use. This involves the treatment of water to remove harmful contaminants and pathogens that can cause waterborne diseases. Access to safe water and sanitation is a fundamental human right, and it is crucial for the prevention of various illnesses and diseases.
                </p>
                <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                  marginLeft:"200px",
              }}>Read More</Button>
              </div>
            </div>

            <div className="col__3">
                <div
                className="shadow p-3 mb-5 bg-body bg-light rounded"
                style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div>
                  <img className = "col_3_img" src="https://i.ibb.co/6PF0Rjk/istockphoto-655410502-612x612.jpg" />
                </div>
              <span>Saving Water</span>
              <p style={{
                textAlign: "justify",
              }}>
                Water saving is the practice of using water efficiently to reduce waste and conserve this precious resource. With increasing global water scarcity, it is essential to adopt water-saving habits and technologies to help preserve this vital natural resource. Water-saving measures can include simple actions like turning off the tap while brushing teeth or installing low-flow fixtures to reduce water usage in households.
              </p>
              <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                marginLeft:"200px",
              }}>Read More</Button>
              </div>
            </div>

              <div class="container pt-5 pb-3">
                <div class="row">
                    <div class="col-md-7">
                      <img src="https://i.ibb.co/1nCh0dk/3d-business-young-woman-sitting-with-a-laptop-and-waving-her-hand.png" 
                      alt="Image" 
                      class="img-fluid"
                      style={{width: '50%',height:"100%"}} 
                      />
                    </div>
                    <div class="col-md-5">
                    <p className='' style={{fontSize:"25px", fontWeight:"700", color:"#0080ff", textAlign:"center"}}>This is the time for you</p> 
                      <p  style={{fontSize:"18px", fontWeight:"500", color:"#000", textAlign:"center"}}>We ooking for writers who are passionate about writing.</p>
                        <Button style={{
                          marginLeft:"165px",
                        }} type="submit" href="/ArticleForm" class="btn btn-primary">Click Here</Button>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

  </>
    
  );
};

export default AboutArticle;
