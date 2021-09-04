import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Portfolio({portfolioData}) {
    // const portfolio = []
    // const [portfolioData, setportfolioData] = useState([])
    // useEffect(() => {
    //     return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000')
    //         .then(res => res.text())
    //         .then(res => {
    //             var arr = []
    //             res.split(`"repo":"`).forEach(element => {
    //                 arr.push(element.split(`",`)[0])
    //             })
    //             delete arr[0]
    //             arr = arr.filter(() => true)
    //             arr.forEach(arr => {
    //                 fetch(`https://api.github.com/repos/brobro10000/${arr}/deployments`).then(res => res.json()).then(data => {
    //                     if (data.length < 1)
    //                         if (arr === 'potluck-chefs') {
    //                             return portfolio.push({ name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://potluck-chef.herokuapp.com/` })
    //                         }
    //                     if (data[0].environment === 'github-pages') {
    //                         if (arr === `brobro10000.github.io`) {
    //                             return portfolio.push({ name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://www.brobro10000.github.io` })
    //                         }
    //                         return portfolio.push({ name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://www.brobro10000.github.io/${arr}` })
    //                     } else if (data[0].description === 'Heroku') {
    //                         return portfolio.push({ name: arr, repo: `https://www.github.com/${arr}`, deployment: data[0].payload.web_url })
    //                     }
    //                 })
    //             })
    //             setportfolioData(portfolio)
    //         });
    // }, []);
    console.log(portfolioData)
    return (
        <>
            {portfolioData.length > 0 && portfolioData.map( element => (
                <div key={element.name}>
                {element.name, element.repo, element.deployment}
                <Card  style={{ width: '18rem' }}>
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