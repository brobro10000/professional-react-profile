import React from 'react';
import { Card, Container, Row, Col, ListGroup, Accordion } from 'react-bootstrap';

function Portfolio({ portfolioData, images }) {
    images.forEach(element1 => {
        var imgname = element1.split('/')[4].split('.')[0]
        portfolioData.forEach(element2 => {
            if (element2.name === imgname)
                element2.img = element1
        })
    })
    return (
        <>
            <Container>
                <Row>
                    <Col s={12} m={4} lg={4}>
                        <ListGroup style={{ position: 'fixed' }} variant="flush">
                            <Accordion defaultActiveKey='4'>
                                <Accordion.Item eventKey='4'>
                                    <Accordion.Header>Table of Contents</Accordion.Header>
                                    <Accordion.Body>
                                        {portfolioData.length > 0 && portfolioData.map(element => (
                                            <ListGroup.Item action href={'#' + element.name} key={element.name}>{element.name}</ListGroup.Item>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </ListGroup>
                    </Col>
                    <Col s={12} m={8} lg={8} className='col-container'>
                        {portfolioData.length > 0 && portfolioData.map(element => (
                            <Card key={'#' + element.name} id={element.name} className='project-card' style={{ width: '80%' }}>
                                <Card.Header>
                                    <Card.Title>{element.name}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Img className='image' variant='middle' src={element.img} />
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col>
                                            <Card.Link href={element.repo}>Repository</Card.Link>
                                        </Col>
                                        <Col>
                                            <Card.Link href={element.deployment}>Website</Card.Link>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Portfolio