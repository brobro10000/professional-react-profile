import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

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
                    {portfolioData.length > 0 && portfolioData.map(element => (
                        <Col key={element.name} s={12} m={4} lg={4} className='col-container'>
                            <Card className='project-card' style={{ width: '18rem' }}>
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
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Portfolio