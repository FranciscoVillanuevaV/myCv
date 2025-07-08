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
        <Card.Subtitle>Software developer at Deloitte</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2024 -{" "}
          <span className="h1 badge text-white">Current job</span>
        </Card.Text>
        <Card.Text className="text-justify">
          Engineered robust .NET APIs with seamless SQL database integration via Entity Framework.
        </Card.Text>
        <hr />
        <Card.Subtitle>Software developer at TCS</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> Apr 2024 - Oct 2024
        </Card.Text>
        <Card.Text className="text-justify">
          Contributed to the enhancement of ASP.NET Core applications integrated with React, leveraging Azure DevOps for continuous development and deployment.
        </Card.Text>  
        <hr />
        <Card.Subtitle>Software developer at FEMSA</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2023 - 2024
        </Card.Text>
        <Card.Text className="text-justify">
          Provided maintenance and enhancement for .NET APIs and web applications across .NET MVC and Angular frameworks.
        </Card.Text>      
        <hr />
        <Card.Subtitle>Software developer at Akky Online Solutions</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2021 - 2023
        </Card.Text>
        <Card.Text className="text-justify">
          Managed and extended APIs for solutions developed with .NET (LINQ, Entity Framework) and Java (Apache CXF, JDBC).
        </Card.Text>      
        <hr />
        <Card.Subtitle>Software developer at Softtek</Card.Subtitle>
        <br />
        <Card.Text>
          <i className="far fa-calendar-alt fa-fw icons"></i> 2019 - 2021
        </Card.Text>
        <Card.Text className="text-justify">
          Developed ASP.NET web applications and RESTful APIs using .NET Core, LINQ, and Entity Framework.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Experience;