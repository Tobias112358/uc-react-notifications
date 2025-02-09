import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../pages/Home/index.js';
import NotFound from '../pages/NotFound/index.js';
import TransitionAnimation from '../pages/TransitionAnimation/index.js';
import pkg from '../../../package.json';

const DEV = true;//   process && process.env && process.env.NODE_ENV === 'development';

const App = () => (
  <BrowserRouter basename={`/${DEV ? '' : pkg.name}`}>
    <div className="page">
      <Header/>
      <main className="page__wrapper">
        <div className=" container page__main">
          <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/transition-animation" Component={TransitionAnimation}/>
            <Route Component={NotFound}/>
          </Routes>
        </div>
      </main>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default App;
