import Card from "react-bootstrap/Card";
import "./styles.css";

function Education() {
  return (
    <Card className="cardInfo rounded">
      <Card.Body>
        <Card.Title>
          <i className="fas fa-graduation-cap fa-fw icons"></i> Education
        </Card.Title>
        <br />
        <Card.Subtitle>
          Maestría en Ciencias de la Ingeniería Eléctrica
        </Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2014 - 2016
        </Card.Text>
        <Card.Text>Facultad de Ingeniería Mecánica y Eléctrica</Card.Text>
        <Card.Text>Universidad Autónoma de Nuevo León</Card.Text>
        <hr />
        <Card.Subtitle>Ingeniero en Electrónica y Comunicaciones</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2008 - 2013
        </Card.Text>
        <Card.Text>Facultad de Ingeniería Mecánica y Eléctrica</Card.Text>
        <Card.Text>Universidad Autónoma de Nuevo León</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Education;