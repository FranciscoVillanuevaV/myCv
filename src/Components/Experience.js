import Card from "react-bootstrap/Card";
import "./styles.scss";

function Experience() {
  return (
    <Card className="cardInfo rounded">
      <Card.Body>
        <Card.Title>
          <i className="fas fa-suitcase fa-fw icons"></i> Professional
          experience
        </Card.Title>
        <br />
        <Card.Subtitle>Software developer at FEMSA</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2023 -{" "}
          <span className="h1 badge text-white">Current job</span>
        </Card.Text>
        <Card.Text className="text-justify">
          Maintenance and extension of .NET APIs and web applications built on .NET MVC and Angular.
        </Card.Text>      
        <hr />
        <Card.Subtitle>Software developer at Akky Online Solutions</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2021 - 2023
        </Card.Text>
        <Card.Text className="text-justify">
          Main activities are related to the maintenance and extension of APIs, built on .NET and Java. 
          Using tools like LINQ and Entity Framework in .NET and technologies like Apache Cxf and JDBC in Java.
        </Card.Text>      
        <hr />
        <Card.Subtitle>Software developer at Softtek</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2019 - 2021
        </Card.Text>
        <Card.Text className="text-justify">
          .NET development of web apps and web APIs. This role was related to ASP.NET Web pages. 
          The backend was built on .NET core APIs, using LINQ and Entity Framework as an ORM.
        </Card.Text>
        <hr />
        <Card.Subtitle>Professor at UVM</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2018 - 2019
        </Card.Text>
        <Card.Text className="text-justify">
          Using Python with Anaconda packages for educational purposes.
        </Card.Text>
        <hr />
      </Card.Body>
    </Card>
  );
}

export default Experience;