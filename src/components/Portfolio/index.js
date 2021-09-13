import React, {useEffect,useState} from 'react';
import { Card, Container, Row, Col, ListGroup, Accordion } from 'react-bootstrap';

function Portfolio({ portfolioData, images }) {
    const [topItem,setTop] = useState([portfolioData, 0])
    console.log(images)
    images.forEach(element1 => {
        console.log(element1)
        var imgname = element1.split('/')[3].split('.')[0]
        portfolioData.forEach(element2 => {
            if (element2.name === imgname)
                element2.img = element1
        })
    })
    function handleSort(e){
        var targetName = e.target.firstChild.data
        for(var i=0; i<portfolioData.length;i++){
            if(targetName === portfolioData[i].name){
                var temp = portfolioData[i]
                portfolioData[i] = portfolioData[0]
                portfolioData[0] = temp
                setTop([portfolioData,i])
                break;
            }
        }
    }
    useEffect(() => {
         window.scrollTo(0,0)
    }, [topItem])

    return (
        <>
            <Container id='portfolioContainer'>
                <Row>
                    <Col className='tocContainer' xs={12} s={12} m={4} lg={4}>
                        <ListGroup style={{ position: 'fixed' }} variant="flush">
                            <Accordion defaultActiveKey='4'>
                                <Accordion.Item eventKey='4'>
                                    <Accordion.Header>Table of Contents</Accordion.Header>
                                    <Accordion.Body>
                                        {portfolioData.length > 0 && portfolioData.map(element => (
                                            <ListGroup.Item action onClick={handleSort}  key={element.name}>{element.name}</ListGroup.Item>
                                         
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </ListGroup>
                    </Col>
                    <Col xs={12} s={12} m={8} lg={8} className='col-container'>
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
                                            <Card.Link href={element.repo} target='_blank'>Repository</Card.Link>
                                        </Col>
                                        <Col>
                                            <Card.Link href={element.deployment}  target='_blank'>Website</Card.Link>
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