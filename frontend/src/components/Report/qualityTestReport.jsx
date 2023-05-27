import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import QualityTestReportList from './qualityTestReportList';



const QualityTestReport = () => {
 const componentRef = useRef();


const handlePrint = useReactToPrint({
 content: () => componentRef.current,
});

 return (


<div style={{marginTop:'10px'}}>
<QualityTestReportList ref={componentRef} />
<Button
 style={{ marginLeft: "8%", width: "15%", height: "20%", fontSize: 15, marginTop: "-500px" }}
 onClick={handlePrint}
 variant="success"
>
 Generate PDF
</Button>
<br />
</div>
 );
  
};

 

export default QualityTestReport;