import React from 'react';
import { Container, Row, Col, Accordion, ListGroup } from 'react-bootstrap';

function Resume({ resume }) {
    resume += '#zoom=65'
    return (
        <Container id='resume-container'>
            <Row>
                <Col>
                    <Accordion defaultActiveKey='3'>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Technical Skills</Accordion.Header>
                            <Accordion.Body>
                                <Accordion  flush >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Web Development</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>HTML5 and the Document Object Model</ListGroup.Item>
                                                <ListGroup.Item>CSS and the Box Model</ListGroup.Item>
                                                <ListGroup.Item>JQuery</ListGroup.Item>
                                                <ListGroup.Item>Materialize</ListGroup.Item>
                                                <ListGroup.Item>Bootstrap/React-Bootstrap</ListGroup.Item>
                                                <ListGroup.Item>SQL - mySQL</ListGroup.Item>
                                                <ListGroup.Item>MongoDB </ListGroup.Item>
                                                <ListGroup.Item>Express</ListGroup.Item>
                                                <ListGroup.Item>React</ListGroup.Item>
                                                <ListGroup.Item>NodeJS </ListGroup.Item>
                                                <ListGroup.Item>Visual Studio Code </ListGroup.Item>
                                                <ListGroup.Item>Partials and Layouts with Handlebars </ListGroup.Item>
                                                <ListGroup.Item>API Development and Integration</ListGroup.Item>
                                                <ListGroup.Item>Database Structure and Routing</ListGroup.Item>
                                                <ListGroup.Item>MVC - Model View Controller Model</ListGroup.Item>
                                                <ListGroup.Item>Progressive Web Applications</ListGroup.Item>
                                                <ListGroup.Item>Site Optimization - Compression, Service Workers and IndexedDb </ListGroup.Item>
                                                <ListGroup.Item>Version Control using Git CLI and Github </ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Languages</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Javascript - Full Stack Web Development</ListGroup.Item>
                                                <ListGroup.Item>Python - Machine Learning, Computer Vision, Mathematical and Data Analysis</ListGroup.Item>
                                                <ListGroup.Item>C, Java - Algorithms</ListGroup.Item>
                                                <ListGroup.Item>C# - Game Development in Unity</ListGroup.Item>
                                                <ListGroup.Item>Verilog and Assembly with TI-MSP Board Family</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col><iframe id='resume-iframe' src={resume}></iframe></Col>
            </Row>
        </Container>
    );
}

export default Resume