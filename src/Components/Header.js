import Card from "react-bootstrap/Card";
import "./styles.css";

function Header() {
  return (
    <Card className="card text-center text-white header">
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        <h1>Francisco Villanueva</h1>
        <h4 className="font-weight-bold">
          Ingeniero en Electrónica y Comunicaciones
        </h4>
      </div>
    </Card>
  );
}

export default Header;