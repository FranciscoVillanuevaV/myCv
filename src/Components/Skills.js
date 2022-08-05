import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

function Skills() {
  return (
    <Card className="cardInfo rounded">
      <Card.Body>
        <Card.Title>
          <i className="fas fa-laptop-code fa-fw icons"></i> Skills
        </Card.Title>
        <br />
        <Row>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Java
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            C#
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            React
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Angular
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Docker
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            SQL
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Git
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            SVN
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Postman
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Python
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            MATLAB
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            JavaScript
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            Bootstrap
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            CSS
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={6} md={4}>
            HTML
          </Col>
        </Row>
        <hr />
        <Card.Subtitle>
          <i className="fas fa-globe-americas fa-fw icons"></i> Languages
        </Card.Subtitle>
        <br />
        <Row>
          <Col style={{ marginBottom: "10px" }} xs={12}>
            English - B2
          </Col>
          <Col style={{ marginBottom: "10px" }} xs={12}>
            German - A2
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Skills;