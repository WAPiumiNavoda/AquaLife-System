import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import InnovationSupportReportList from "./InnovationSupportReportList";



const InnovationSupportReport = () => {
 const componentRef = useRef();


const handlePrint = useReactToPrint({
 content: () => componentRef.current,
});

 return (


<div style={{marginTop:'100px'}}>
<InnovationSupportReportList ref={componentRef} />
<br></br>


 <br></br>
<Button
 style={{ marginLeft: "80%",marginBottom:'100px', width: "15%", height: "20%", fontSize: 15 }}
 onClick={handlePrint}
 variant="success"
>
 Generate PDF
</Button>
<br />
</div>
 );
  
};

 

export default InnovationSupportReport;