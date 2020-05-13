import 'normalize.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';

import * as serviceWorker from './serviceWorker';

import About from './about/about';
import Contact from './contact/contact';
import Intro from './intro/intro';
import Navbar from './navbar/navbar';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Intro />
    <About />
    <Contact />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
