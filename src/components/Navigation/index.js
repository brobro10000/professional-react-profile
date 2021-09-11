import React, {useEffect} from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import image from '../../assets/images/me.jpg'

function Navigation(props) {
  const nav = ['About', 'Portfolio','Contact','Resume']
  useEffect(() => {
    document.getElementById('portrait').setAttribute('style', 'height:auto;width:100;max-width:100px;margin-right:15px')
  })
  return (
    <Navbar id='headerNav' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Image id='portrait' alt='Dev-Image' src={image} rounded />
        <Navbar.Brand className='myName'>Hamzah Ullah</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {nav.map(nav => (
              <Nav.Link
                key = {nav}
                href={'#_' + nav.toLowerCase()}
                onClick={() => props.handlePageChange(nav)}
                className={
                  props.currentPage === nav ? 'nav-link active' : 'nav-link'
                }>{nav}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation