import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Menu extends React.Component {
	render() {
		return(
			<Navbar expand="lg" bg="dark" variant="dark" className="rounded sticky-top">
				<Navbar.Brand>Curriculum Vitae</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link>Education</Nav.Link>
						<Nav.Link>Professional experience</Nav.Link>
						<Nav.Link>Skills</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>	
		)
	}
}

export default Menu;