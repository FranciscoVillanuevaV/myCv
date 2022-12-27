import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.scss";
import myAvatar from "./foto_cv22.jpg";

function PersonalInfo() {
  return (
    <Card className="cardInfo rounded">
      <Card.Body>
        <Row>
          <Col md={4} style={{ textAlign: "center" }}>
            <img
              src={myAvatar}
              width="200px"
              className="rounded-circle"
              alt="Avatar"
            />
          </Col>
          <Col md={8} style={{ marginTop: "40px" }}>
            <p>
              <i className="fas fa-home fa-fw icons"></i> Monterrey, Nuevo León, MX.{" "}
            </p>
            <p>
              <i className="fas fa-envelope fa-fw icons"></i>{" "}
              villanuevavazquez.francisco@gmail.com
            </p>
            <p>
              <i className="fas fa-mobile-alt fa-fw icons"></i> 811 662 9343
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PersonalInfo;