import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = ({ history }) => {

  return (
    <div className="background">
      <div className="Container">
        <br/><br/>
        <Card
          style={{
            borderRadius: 80,
            borderWidth: 7.0,
            marginTop: 50,
            paddingInline: 10,
            background: "rgba(231, 238, 238, 0.8)",
            marginLeft: "30%",
            marginRight: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            minWidth:"90vh",
            width:800,
            Height:400
           
       
          }}
        >
          <div className="intro-text">
            <h1 style={{ fontSize: 24, marginBottom: 40 }}>You can Donate payement method or labour</h1>
            <div>
              <Link to="/donate" style={{ textDecoration: "none", marginBottom: 20 }}>
                <Button
                  variant="success"
                  size="lg"
                  className="landingbutton"
                  style={{ width: 350, height: 75 }}
                >
                  Donate Money
                </Button>
              </Link>
              <br /><br/>
              <Link to="/createLabour" style={{ textDecoration: "none" }}>
                <Button
                  variant="success"
                  size="lg"
                  className="landingbutton"
                  style={{ width: 350, height: 75 }}
                >
                 Donate Labour
                </Button>
              </Link>
            </div>
          </div>
        </Card>
        <br/><br/>
      </div>
    </div>
  );
};

export default Dashboard;