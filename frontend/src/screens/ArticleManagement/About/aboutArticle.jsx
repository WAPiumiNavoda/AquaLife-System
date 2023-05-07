import React from "react";
import { useSelector } from "react-redux";
import "./aboutArticle.css";
import Button from 'react-bootstrap/Button';

const AboutArticle = () => {
   
  return (

    <div>

    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="article_about__page">
        {/* 1st verse */}
        <div className="row flex  rounded">
          <div className="col__2">
            <img src="https://i.ibb.co/7tWJDyC/i-Stock-1029427710.jpg"
            style={{height:"550px",width:"600px"}}
            />
          </div>
          <div className="col__2">
            <div className="meta_article">
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
        <div className="article_second">
          <div className="article_heading">
            <h2>Verious Types of Papers from one Place</h2>
          </div>
          <div className="row flex p-2">

          <div class="card">
            <img src="https://i.ibb.co/XXHpp2Z/bottles-garbage-lake.webp" alt="Avatar" 
            style={{width: "500px",
                    height: "300px"}}/>
            <div class="container">
              <h4><b>Water Polutions</b></h4>
              <p style={{
                textAlign:"justify",
              }}> Water pollution is the contamination of water bodies, such as rivers, lakes, oceans, and groundwater, with harmful substances. It is a serious global issue that affects not only aquatic ecosystems but also human health and the economy. Water pollution can be caused by a wide range of sources, including industrial activities, agricultural runoff, sewage discharge, and oil spills.</p> 
              <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                  marginLeft:"200px",
              }}>Read More</Button>
            </div>
          </div>

          <div class="card">
            <img src="https://i.ibb.co/Z13FmtT/Your-equipment-may-require.jpg" alt="Avatar" 
            style={{width: "500px",
                    height: "300px"}}/>
            <div class="container">
              <h4><b>Water Usages</b></h4>
              <p style={{
                textAlign:"justify",
              }}> Water pollution is the contamination of water bodies, such as rivers, lakes, oceans, and groundwater, with harmful substances. It is a serious global issue that affects not only aquatic ecosystems but also human health and the economy. Water pollution can be caused by a wide range of sources, including industrial activities, agricultural runoff, sewage discharge, and oil spills.</p> 
              <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                  marginLeft:"200px",
              }}>Read More</Button>
            </div>
          </div>

          <div class="card">
            <img src="https://i.ibb.co/kBRFQVS/Why-It-Matters-Clean-Water-and-Sanitation.png" alt="Avatar" 
            style={{width: "500px",
                    height: "300px"}}/>
            <div class="container">
              <h4><b>Water Sanitation</b></h4>
              <p style={{
                textAlign:"justify",
              }}> Water pollution is the contamination of water bodies, such as rivers, lakes, oceans, and groundwater, with harmful substances. It is a serious global issue that affects not only aquatic ecosystems but also human health and the economy. Water pollution can be caused by a wide range of sources, including industrial activities, agricultural runoff, sewage discharge, and oil spills.</p> 
              <Button type="submit" href="/oneArticle" class="btn btn-primary btn-floating mx-1" style={{
                  marginLeft:"200px",
              }}>Read More</Button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>

  </div>
    
  );
};

export default AboutArticle;
