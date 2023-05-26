import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../../Assets/img1.jpg";

const Maintenance = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ncbqicg",
        "template_jb29dh2",
        formRef.current,
        "sc_30sNceCGeNdYwQ"
      )
      .then(
        (result) => {
          alert("Service Request Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="banner1">
        <h1>
          <span className="banner1__wastewater">Wastewater Treatment &</span>
        </h1>
        <h1>
          <span className="banner1__treatment">Water Quality Monitoring</span>
        </h1>
        <p>
          Our Company has been the leading supplier of wastewater treatment
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>

      <div className="featured-products3">
        <h2>Service & Maintenance</h2>
        <div className="service-maintenance-container">
          <br />

          <div className="service-maintenance-left">
            <div className="image-container99">
              <img src={img1} />
            </div>
            <form className="form99" ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <br />
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="user_contact"
                placeholder="Your Contact Number"
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                placeholder="How can we help you?"
                style={{ height: 150 }}
                defaultValue={""}
                required
              />
              <br />
              <input
                className="service-maintenance-button"
                type="submit"
                defaultValue="Send"
              />
              <br />
              <br />
            </form>
          </div>
          <div className="service-maintenance-right">
            <h3 className="service-maintenance-title">Get in Touch</h3>
            <p className="service-maintenance-description">
              At AquaLife, we offer top-notch service and maintenance solutions
              to keep your aquatic environment in optimal condition. Our
              dedicated team of experts specializes in servicing and maintaining
              aquatic systems, ensuring their longevity and peak performance.
              With our comprehensive service packages, we provide regular
              inspections, water quality testing, equipment cleaning and
              maintenance, troubleshooting, and preventive maintenance plans.
              Our goal is to proactively address any issues, maintain water
              quality, and ensure the smooth operation of your aquatic systems.
              Our skilled technicians are trained to handle various aquatic
              equipment, including filters, pumps, heaters, and lighting
              systems. They perform thorough cleaning, calibration, and repairs,
              ensuring that your equipment functions at its best and minimizing
              any potential disruptions.
            </p>
            <div className="service-maintenance-contact">
              <i className="fas fa-envelope"></i>
              <b> Customer service:</b> <br />
              Phone: +94 119 209 291
              <br />
              E-mail:{" "}
              <a href="mailto:support@mysite.com">aqualife@service.com</a>
              <br />
              <br />
              <br />
              <i className="fas fa-home"></i>
              <b> Headquarters:</b>
              <br />
              Company Inc, <br />
              Las vegas street 201
              <br />
              55001 Nevada, USA
              <br />
              Phone: +1 145 000 101
              <br />
              <a href="mailto:usa@mysite.com">usa@mysite.com</a>
              <br />
              <br />
              <br />
              <i className="fas fa-map-marker-alt"></i>
              <b> Sri Lanka:</b>
              <br />
              Company Aqua Life Litd, <br />
              25/F.168 Parkland Street
              <br />
              Colombo 07, Sri Lanka
              <br />
              Phone: +94 119 209 291
              <br />
              <a href="mailto:hk@mysite.com">aqualife@service.com</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
