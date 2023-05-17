import React from "react";
import { Link } from "react-router-dom";
import img5 from "../../Assets/machine.png";
import img6 from "../../Assets/purification.png";
import img7 from "../../Assets/maintenance.png";

function Treatment() {
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
          Our Company has been the leading supplier of wastewater treatment{" "}
          <br /> & water quality monitoring solutions since 1995.
        </p>
      </div>
      <div class="container">
        <div class="description description-1">
          <h2>What is Wastewater Treatment?</h2>
          <p>
            Wastewater treatment is the process of removing contaminants from
            wastewater and making it safe for discharge into the environment.
            Our industrial wastewater treatment machines are designed to meet
            the needs of any size facility, providing effective and reliable
            solutions for treating industrial wastewater and meeting regulatory
            requirements.
          </p>
        </div>
        <div class="description description-2">
          <h2>What is Water Quality Monitoring?</h2>
          <p>
            Water quality monitoring is the process of analyzing water to detect
            and measure various physical, chemical, and biological parameters to
            ensure its safety and quality. Our water quality monitoring
            solutions use advanced technologies to detect and measure
            contaminants in water, ensuring that it is safe and clean for use in
            homes and businesses. We offer a range of solutions for both small
            and large-scale applications.
          </p>
        </div>
      </div>
      <div className="navigation">
        <div className="card1">
          <img src={img5} alt="machines" />
          <h2>Wastewater Treatment Machines</h2>
          <p>
            Our wastewater treatment machines are designed to meet the needs of
            facility, providing effective, reliable solutions for treating
            industrial wastewater.
          </p>
          <Link to="/products">Learn More</Link>
        </div>
        <div className="card1">
          <img src={img6} alt="purification" />
          <h2>Water Quality Monitoring</h2>
          <p>
            Our purification and filtration plants use advanced technologies to
            remove impurities from water, making it safe and clean for use in
            homes and businesses. We offer a range of solutions for both small
            and large-scale applications.
          </p>
          <Link to="/quality">Learn More</Link>
        </div>
        <div className="card1">
          <img src={img7} alt="maintenance" />
          <h2>Service & Maintenance</h2>
          <p>
            Our team will conduct repairs as needed to keep your plants running
            smoothly and efficiently. With our service maintenance you can have
            peace of mind knowing that your water purification and filtration
            plants are in good hands.
          </p>
          <Link to="/maintenance">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Treatment;
