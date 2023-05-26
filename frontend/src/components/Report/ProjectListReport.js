import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import ProjectList from "./projectList";

const ProjectReport = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
 
    <div style={{ marginTop: "100px" }}>
      <ProjectList ref={componentRef} />
      <Button
        style={{
          marginLeft: "80%",
          marginBottom: "100px",
          width: "15%",
          height: "20%",
          fontSize: 15,
          padding:10,
          marginTop:"-200px"
        }}
        onClick={handlePrint}
        variant="success"
      >
        Generate PDF
      </Button>
       
      </div>
      
      

   
  );
};

export default ProjectReport;
