import React from 'react';
import { Col, Row, Nav, Navbar, Container, Image } from 'react-bootstrap';
import image from '../../assets/images/me.jpg'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

function Navigation(props) {
  const nav = ['Portfolio', 'Contact', 'Resume']
  return (
    <Navbar fixed='top' id='headerNav' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className='justify-content-center'>
        {/* <Image id='portrait' alt='Dev-Image' src={image} rounded /> */}
        <Navbar.Brand className='myName'>Hamzah Ullah</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse align='end' id="responsive-navbar-nav">
          <Nav id='navCollection' className="me-auto">
            {nav.map(nav => (
              <Nav.Link
                key={nav}
                href={'#_' + nav.toLowerCase()}
                onClick={() => props.handlePageChange(nav)}
                className={
                  props.currentPage === nav ? 'nav-link active' : 'nav-link'
                }>{nav}</Nav.Link>
            ))}

          </Nav>

          <Nav.Link href='https://github.com/brobro10000' title="Github Link" alt="Github Link" rel="noopener" target='_blank'><AiFillGithub alt="Github Logo" className='footerImg' fill='#6e5494' size={40} /></Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/hamzahullah/' title="LinkedIn Link" alt="LinkedIn Link" rel="noopener" target='_blank'><AiFillLinkedin alt="LinkedIn Logo" className='footerImg' fill='#0077b5' size={40} /></Nav.Link>
          {/* <Nav.Link href='https://www.datacamp.com/profile/hamzahullah' title="DataCamp Link" alt="DataCamp Link" rel="noopener" target='_blank'>{(DataCamp)}</Nav.Link> */}
          <Nav.Link href='https://www.troubleshoottinker.com' title="Youtube Link" rel="noopener" target='_blank' alt="Youtube Link"><AiFillYoutube alt="Youtube Logo" className='footerImg' fill='#ff0000' size={40} /></Nav.Link>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation