import React, { useEffect } from 'react';
import { Nav, Navbar, Container , Image} from 'react-bootstrap';
import image from '../../assets/images/me.jpg'

function Navigation(props) {
    useEffect(() => {
        document.getElementById('portrait').setAttribute('style','height:auto%;width:100%;max-width:100px;margin-right:15px')
      })
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Image id='portrait' alt='Dev-Image' src={image}  roundedCircle />
        <Navbar.Brand href="#home">Hamzah Ullah</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}

export default Navigation