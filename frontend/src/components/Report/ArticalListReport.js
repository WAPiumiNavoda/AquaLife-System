import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import ArticleList from "./ArticalList";

const ArticalListReport = () => {
 const componentRef = useRef();


const handlePrint = useReactToPrint({
 content: () => componentRef.current,
});

 return (


<div style={{marginTop:'10px'}}>
<ArticleList ref={componentRef} />
<br></br>


 <br></br>
<Button
  style={{
          marginLeft: "80%",
          marginBottom: "100px",
          width: "15%",
          height: "20%",
          fontSize: 15,
          padding:10,
          marginTop:"250px"
        }}
 onClick={handlePrint}
 variant="success"
>
 Generate PDF
</Button>
<br />
</div>
 );
  
};

 

export default ArticalListReport;