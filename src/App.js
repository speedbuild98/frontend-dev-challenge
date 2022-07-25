//Dependencies
import React, { useState, useEffect } from 'react';

//Components
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";

//Styles
import "./App.scss";

//Images
import loaderGif from '../src/assets/loader.gif'
import logoMenu from '../src/assets/logoMenu.svg'
import logoSmall from '../src/assets/favicon.svg'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);


  return (
    <div>
      {loading ? (
        <div id="loader">
          <img src={logoSmall} alt="butterfly logo" />
          <img src={logoMenu} alt="menu logo" />
          <img src={loaderGif} alt="loader logo" />
        </div>
      ) : (
        <div className="App">
          <Nav />
          <Header />
          <div className="mainContainer">
            <Aside />
            <div className="container">
              <Profile />
              <Content />
            </div>
          </div>
          <Newsletter />
          <FAQ />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;

