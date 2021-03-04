import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Carousel } from 'react-bootstrap';
import Img1 from './img/logo-react.png';
import Img2 from './img/office.jpeg';
import './Home.css';

export default function Home() {
  useEffect(() => {
    toast.success('Welcome !');
  }, []);

  return (
    <div>
      <h1 className="title">Welcome to iCount!</h1>
      <p className="text">
        {`
        This is the iCount App: a smart and useful counter developed in React. Here you'll find a number counter and much more features that will match your expectations of a beginner's developer - i hope. `}
        &#x1F648;
      </p>
      <Carousel className="carousel">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Img1}
            alt="react js"
          />
          <Carousel.Caption className="cap">
            <p>iCount is a React.js application.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Img2}
            alt="office"
          />

          <Carousel.Caption className="cap">
            <p>Visit my social media below.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
