import React, {useEffect} from 'react';
import { Card } from 'react-bootstrap';

function Portfolio({ portfolioData, images }) {
    images.forEach(element1 => {
        var imgname = element1.split('/')[4].split('.')[0]
        portfolioData.forEach(element2 => {
            if (element2.name == imgname)
                element2.img = element1
        })
    })
    return (
        <>
            {portfolioData.length > 0 && portfolioData.map(element => (
                <Card key={element.name} style={{ width: '18rem' }}>
                    <Card.Header>
                        <Card.Title>{element.name}</Card.Title>
                        </Card.Header>
                    <Card.Body>
                        <Card.Img classname='image' variant='middle' src={element.img} />
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href={element.repo}>{element.repo}</Card.Link>
                        <Card.Link href={element.deployment}>{element.deployment}</Card.Link>
                    </Card.Footer>
                </Card>
            ))}
        </>
    )
}

export default Portfolio