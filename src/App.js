import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header";
import PersonalInfo from "./Components/PersonalInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import BallsEffectDesktop from "./Components/BallsEffectDesktop";
import BallsEffectMobile from "./Components/BallsEffectMobile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.education = React.createRef();
    this.experience = React.createRef();
    this.skills = React.createRef();
    this.menu = React.createRef();
  }
  componentDidMount() {
    AOS.init();
    this.stickFix();
    window.addEventListener("resize", this.stickFix);
    document.body.addEventListener("mousemove", (event) =>
      BallsEffectDesktop(event)
    );
    document.body.addEventListener("touchmove", (event) =>
      BallsEffectMobile(event)
    );
  }
  calculatePosition = (reference) => {
    let topPos = 0;
    if (reference.current) {
      topPos = reference.current.getBoundingClientRect().top;
    }
    return topPos + window.scrollY;
  };
  returnPosition = (location) => {
    switch (location) {
      case "header":
        return this.calculatePosition(this.header);
      case "education":
        return this.calculatePosition(this.education);
      case "skills":
        return this.calculatePosition(this.skills);
      case "experience":
        return this.calculatePosition(this.experience);
      default:
        return 0;
    }
  };
  scrollToElement = (location) => {
    const position = this.returnPosition(location);
    window.scroll(0, position - this.menuHeight);
  };
  stickFix = () => {
    if (this.menu.current) {
      if (window.innerWidth < 993) {
        this.menu.current.classList.remove("sticky-top");
        this.menuHeight = 0;
      } else {
        this.menu.current.classList.add("sticky-top");
        this.menuHeight = 60;
      }
    }
  };
  render() {
    return (
      <div
        style={{ fontFamily: "Arial, sans-serif" }}
        className="container-fluid col-lg-9 col-md-11 col-sm-9"
      >
        <div ref={this.header}>
          <Header />
        </div>
        <Navbar
          ref={this.menu}
          expand="lg"
          bg="dark"
          variant="dark"
          className="rounded"
        >
          <Navbar.Brand
            onTouchEnd={() => this.scrollToElement("header")}
            onClick={() => this.scrollToElement("header")}
          >
            Curriculum Vitae
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                onTouchEnd={() => this.scrollToElement("education")}
                onClick={() => this.scrollToElement("education")}
              >
                Education
              </Nav.Link>
              <Nav.Link
                onTouchEnd={() => this.scrollToElement("experience")}
                onClick={() => this.scrollToElement("experience")}
              >
                Professional experience
              </Nav.Link>
              <Nav.Link
                onTouchEnd={() => this.scrollToElement("skills")}
                onClick={() => this.scrollToElement("skills")}
              >
                Skills
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <PersonalInfo />
        </div>
        <p ref={this.education}></p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Education />
        </div>
        <p ref={this.experience}></p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Experience />
        </div>
        <p ref={this.skills}></p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;