import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
function Footer(props) {
    // eslint-disable-next-line
    const [DataCamp, DataCampChange] = useState('')
    useEffect(() => {
        return DataCampChange(<svg alt="DataCamp Logo" className='footerImg' height="34" width="25"><path d="M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z" fill="#03EF62" fillRule="evenodd"></path></svg>)
    }, [])
    return (
        <Navbar id='footerNav' fixed='bottom' expand="lg" bg="dark" variant="dark">
            <Container className='footer-container'>
                <Nav.Link href='https://github.com/brobro10000' title="Github Link" alt="Github Link" rel="noopener" target='_blank'><AiFillGithub alt="Github Logo" className='footerImg' fill='#6e5494' size={30} /></Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/hamzahullah/' title="LinkedIn Link" alt="LinkedIn Link" rel="noopener" target='_blank'><AiFillLinkedin alt="LinkedIn Logo" className='footerImg' fill='#0077b5' size={30} /></Nav.Link>
                {/* <Nav.Link href='https://www.datacamp.com/profile/hamzahullah' title="DataCamp Link" alt="DataCamp Link" rel="noopener" target='_blank'>{(DataCamp)}</Nav.Link> */}
                <Nav.Link href='https://www.troubleshoottinker.com' title="Youtube Link" rel="noopener" target='_blank' alt="Youtube Link"><AiFillYoutube alt="Youtube Logo" className='footerImg' fill='#ff0000' size={30} /></Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Footer