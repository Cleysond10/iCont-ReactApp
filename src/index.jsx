import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer>by Cleyson Duarte</Footer>
  </React.StrictMode>,
  document.getElementById('root'),
);
