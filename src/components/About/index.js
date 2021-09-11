import React from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import me2 from '../../assets/images/m2.jpg'
function About(props) {

    return (
        <Container id='aboutContainer'>
            <Card id='aboutCard'>
                <Row>
                    <Col md={3}>
                        <Image id='aboutImage' src={me2} roundedCircle />
                    </Col>
                    <Col id="aboutText" md={9}>
                        <Card.Title id='aboutTitle' >
                            My name is Hamzah Ullah, and I love to code!
                        </Card.Title>
                        <Card.Body>
                       <p> I am currently pursuing a Bachelor's Degree in Computer Engineering from the University of Central Florida with an emphasis on machine learning and robotics.
                        I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease.</p>
                        <p id='mission'> "Life is about the constant pursuit of knowledge, if you stop learning, you stop growing."</p>
                           <p>  Currently, I am looking for new career opportunities my current job position cannot provide.</p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default About