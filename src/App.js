// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume'
import Footer from './components/Footer';
import budget from './assets/images/budget-analysis-and-visualizer.png'
import crypto from './assets/images/Crypto-Tycoon.png'
import potluck from './assets/images/potluck-chefs.png'
import rprofile from './assets/images/react-profile.png'
import rot from './assets/images/repository-of-thought.png'
import wd from './assets/images/weather-dashboard.png'
import resume from './assets/files/UllahHamzahResume.pdf'
function App() {
  const [portfolioData, setportfolioData] = useState([])
  const [currentPage, handlePageChange] = useState('About');
  const imgArr = [budget, crypto, potluck, rprofile, rot, wd]
  let db;
  const request = indexedDB.open('apiCalls', 1);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('api', { autoIncrement: true });
  };
  request.onerror = function (event) {
    console.log(event.target.errorCode);
  }

  function saveRecord(record) {
    const api = db.transaction(['api'], 'readwrite');
    const apiObjectStore = api.objectStore('api');

    apiObjectStore.add(record);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <ContactForm />
      case 'Portfolio':
        return portfolioData.length > 0 ?
          <Portfolio portfolioData={portfolioData} images={imgArr} /> : <></>
      case 'Resume':
        return <Resume resume = {resume} />
      default: return <About />
    }
  };
  console.log(currentPage)
  useEffect(() => {
    request.onsuccess = (event) => {
      db = event.target.result;
      const api = db.transaction(['api'], 'readwrite');
      const apiObjectStore = api.objectStore('api');
      const getAll = apiObjectStore.getAll();
      getAll.onsuccess = () => {
        if (getAll.result.length === 6) {
          return setportfolioData(getAll.result)
        } else {
          return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000')
            .then(res => res.text())
            .then(res => {
              var arr = []
              res.split(`"repo":"`).forEach(element => {
                arr.push(element.split(`",`)[0])
              })
              delete arr[0]
              const newArr = arr.filter(() => true)
              newArr.forEach(element => {
                fetch(`https://api.github.com/repos/brobro10000/${element}/deployments`).then(res => res.json()).then(data => {
                  if (data.length < 1)
                    if (element === 'potluck-chefs') {
                      saveRecord({ name: element, repo: `https://www.github.com/${element}`, deployment: `https://potluck-chef.herokuapp.com/` })
                      return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://potluck-chef.herokuapp.com/` }])
                    }
                  if (data[0].environment === 'github-pages') {
                    if (element === `brobro10000.github.io`) {
                      saveRecord({ name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io` })
                      return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io` }])
                    }
                    saveRecord({ name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io/${element}` })
                    return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: `https://www.brobro10000.github.io/${element}` }])
                  } else if (data[0].description === 'Heroku') {
                    saveRecord({ name: element, repo: `https://www.github.com/${element}`, deployment: data[0].payload.web_url })
                    return setportfolioData((state) => [...state, { name: element, repo: `https://www.github.com/${element}`, deployment: data[0].payload.web_url }])
                  }
                })
              })
            });
        }
      }
    }
  }, []);
  return (
    <div>
      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );

}

export default App;
