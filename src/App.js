// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
function App() {
  const [portfolioData, setportfolioData] = useState([])
  useEffect(() => {
    return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000')
      .then(res => res.text())
      .then(res => {
        var arr = []
        res.split(`"repo":"`).forEach(element => {
          arr.push(element.split(`",`)[0])
        })
        delete arr[0]
        arr = arr.filter(() => true)
        arr.forEach(arr => {
          fetch(`https://api.github.com/repos/brobro10000/${arr}/deployments`).then(res => res.json()).then(data => {
            if (data.length < 1)
              if (arr === 'potluck-chefs') {
                return setportfolioData((state) => [...state, { name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://potluck-chef.herokuapp.com/` }])
              }
            if (data[0].environment === 'github-pages') {
              if (arr === `brobro10000.github.io`) {
                return setportfolioData((state) => [...state, { name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://www.brobro10000.github.io` }])
              }
              return setportfolioData((state) => [...state, { name: arr, repo: `https://www.github.com/${arr}`, deployment: `https://www.brobro10000.github.io/${arr}` }])
            } else if (data[0].description === 'Heroku') {
              return setportfolioData((state) => [...state, { name: arr, repo: `https://www.github.com/${arr}`, deployment: data[0].payload.web_url }])
            }
          })
        })
      });
  }, []);
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {portfolioData.length > 0 ?
          <Portfolio portfolioData={portfolioData} /> : <></>
        }
        <ContactForm />
      </main>
    </div>
  );

}

export default App;
