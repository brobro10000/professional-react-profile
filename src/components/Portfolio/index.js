import React from 'react';
import { Card } from 'react-bootstrap';

function Portfolio({ portfolioData }) {
    return (
        <>
            {portfolioData.length > 0 && portfolioData.map(element => (
                <div key={element.name}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Link href={element.repo}>{element.repo}</Card.Link>
                            <Card.Link href={element.deployment}>{element.deployment}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default Portfolio