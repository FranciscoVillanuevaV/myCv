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
    window.addEventListener("scroll", this.scrollableAnchors);
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
  scrollableAnchors = () => {
    this.removeActive();
    let scPos = window.scrollY;
    if (scPos >= this.educationOffSetTop && scPos < this.educationOffSetTop + this.educationOffSetHeigth) {
      document.getElementById('educationLink').classList.add("active");
    } else if (scPos >= this.experienceOffSetTop && scPos < this.experienceOffSetTop + this.experienceOffSetHeigth - 300) {
      document.getElementById('experienceLink').classList.add("active");
    } else if (scPos >= this.skillsOffSetTop - 300 && scPos < this.skillsOffSetTop + this.skillsOffSetHeigth){
      document.getElementById('skillsLink').classList.add("active");
    }
  };
  removeActive = () => {
    document.getElementById("educationLink").classList.remove("active");
    document.getElementById("experienceLink").classList.remove("active");
    document.getElementById("skillsLink").classList.remove("active");
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
    this.educationOffSetHeigth = document.getElementById('education').offsetHeight;
    this.experienceOffSetHeigth = document.getElementById('experience').offsetHeight;
    this.skillsOffSetHeigth = document.getElementById('skills').offsetHeight;
  
    this.educationOffSetTop = document.getElementById('education').offsetTop - this.menuHeight;
    this.experienceOffSetTop = document.getElementById('experience').offsetTop - this.menuHeight;
    this.skillsOffSetTop = document.getElementById('skills').offsetTop - this.menuHeight;
  };
  render() {
    return (
      <div
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="container-fluid col-lg-9 col-md-11 col-sm-9"
      >
        <div ref={this.header}>
          <Header />
        </div>
        <Navbar
          ref={this.menu}
          expand="lg"
          variant="dark"
          className="rounded menu"
        >
          <Navbar.Brand
            onTouchEnd={() => this.scrollToElement("header")}
            onClick={() => {
              this.scrollToElement("header");
              this.removeActive();
            }}
          >
            Curriculum Vitae
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menuLinks mr-auto">
              <Nav.Link
                id={"educationLink"}
                onTouchEnd={() => this.scrollToElement("education")}
                onClick={() => this.scrollToElement("education")}
              >
                Education
              </Nav.Link>
              <Nav.Link
                id={"experienceLink"}
                onTouchEnd={() => this.scrollToElement("experience")}
                onClick={() => this.scrollToElement("experience")}
              >
                Professional experience
              </Nav.Link>
              <Nav.Link
                id={"skillsLink"}
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
          id = "education"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Education />
        </div>
        <p ref={this.experience}></p>
        <div
          id = "experience"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <Experience />
        </div>
        <p ref={this.skills}></p>
        <div
          id = "skills"
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