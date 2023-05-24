import React from "react";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const AboutArticle = () => {
   
  return (

    <div>

    <div   style={{
        width: "90%",
        margin: "0px auto",
      }}>
      <div className="article_about__page">
        {/* 1st verse */}
        <div className="row flex  rounded">
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

          <div class="card" style={{width: "400px",
                                    height: "250px",
                                    margin: "5px",
                                    padding:"5px"
          }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <Button type="submit" href="/oneArticle" class="btn btn-primary" style={{
                  marginLeft:"200px",
                 width:"100px",
                 height:"25px"
              }}>Read More</Button>
          </div>

          <div class="card" style={{width: "400px",
                                    height: "250px",
                                    margin: "5px",
                                    padding:"5px"
                                    
          }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <Button type="submit" href="/oneArticle" class="btn btn-primary" style={{
                  marginLeft:"200px",
                 width:"100px",
                 height:"25px"
              }}>Read More</Button>
          </div>

          <div class="card" style={{width: "400px",
                                    height: "250px",
                                    margin: "5px",
                                    padding:"5px"
          }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <Button type="submit" href="/oneArticle" class="btn btn-primary" style={{
                  marginLeft:"200px",
                 width:"100px",
                 height:"25px"
              }}>Read More</Button>
          </div>

          </div>
        </div>
      </div>
    </div>
 
  </div>
    
  );
};

export default AboutArticle;
