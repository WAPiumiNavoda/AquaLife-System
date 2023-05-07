import React from "react";
import { useSelector } from "react-redux";
import "../about/About.css";


const About = () => {
   
  return (

    <>
   <div className="row flex">
          <div className="col__2">
            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" />
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
                What About Innovations
              </span>
              
             <p>
                Innovation often refers to something new, such as an invention, or the practice of 
                developing and introducing new things. In the tech world, an innovation is usually a 
                new product, but it can also be a new way of doing something or even a new way of thinking.
                 At the Foundation, and through our BOLT and Research programs, we are learning that innovation
                  looks many different ways, and take a number of different forms. For example, Dr. Chomora Mikeka 
                  in Malawi is developing a solution to “green” the way in which garbage is collected in cities. Innovation
                   can also be about encouraging collaboration amongst diverse groups of thinkers, activists and inventers 
                   to solve existing real-world problems. As Sanjay, the project leader of the Self-Organized Learning 
                   Environments (SOLE) Lab in Colombia, points out about what innovation means in the SOLE experience “… you 
                   cannot plan it, it’s an emergent process that happens in a dialogue”. Our work and grantees are pushing us to
                    be more open to definitions of innovation related to the 
                Internet that go beyond what might come to mind at first thought.
              </p>
              <p>
                lus ferri velit sanctus cu, sed at soleat accusata. Dictas
                prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante Etiam sit amet
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis
                massa tincidunt dui ut ornare lectus. Auctor elit sed
                vulputate mi sit amet. Commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate id est laborum.
              </p>
            </div>
          </div>
        </div>

          <div className="second">
          <div className="heading">
            <h2>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3 shadow bg-light pt-2 pb-2">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                </div>
              <span>Best Prices & Offers</span>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3 shadow bg-light pt-2 pb-2">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                </div>
              <span>Best For Trust & Quality</span>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3 shadow bg-light pt-2 pb-2">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                </div>
              <span>Fast Delivery System</span>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>       
          </div>
        </div>

  </>
    
  );
};

export default About;
