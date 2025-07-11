import Card from "react-bootstrap/Card";
import "./styles.scss";

function Header() {
  return (
    <Card className="card text-center text-white header">
      <div style={{ marginTop: "20px", marginBottom: "10px"}}>
        <h1 className="myName">Francisco Villanueva</h1>
        <h4 style={{fontWeight: "400"}}>
          Software Developer
        </h4>
      </div>
    </Card>
  );
}

export default Header;