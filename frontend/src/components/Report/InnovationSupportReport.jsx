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
<div className="AdminLeaveReportbg">

<div style={{ minHeight: '200px'  }}>
<Card
 style={{
 marginTop:'100px',
 paddingBottom:'10px',
 width: "90%",
 borderRadius: 20,
 borderWidth: 0.8,
 background: "#E3F4F4",
 }}
>
<InnovationSupportReportList ref={componentRef} />
<br></br>


 <br></br>
<Button
 style={{ marginLeft: "80%", width: "15%", height: "20%", fontSize: 15 }}
 onClick={handlePrint}
 variant="success"
>
 Generate PDF
</Button>
</Card>
<br />
</div>
</div>
 );
  
};

 

export default InnovationSupportReport;