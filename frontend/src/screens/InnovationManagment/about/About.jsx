import React from "react";
import { useSelector } from "react-redux";
import "../about/About.css";


const About = () => {
   
  return (

    <>

    <div className="pt-5">

          <div class="container p-1">
       <div className="p-5" >
            <img style={{width:"500px"}} src="https://i.ibb.co/7jhRhh5/Boy-Water-innovation-smaller-1024x683.jpg" />
          </div>
    <div class="col-md-6">
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
             
    </div>
</div>
       
    </div>

  </>
    
  );
};

export default About;
