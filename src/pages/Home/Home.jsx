import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Carousel } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  useEffect(() => {
    toast.success('Welcome to iCount !');
  }, []);

  return (
    <div>
      <h1 className="title">Welcome!</h1>
      <p className="text">
        {`
        This is the iCount App. Here you'll find a number counter.`}
      </p>
      <Carousel className="carousel">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://reactjs.org/logo-og.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>First slide label</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/OzJfmff2Hbm8KZ8r86PLJRG_hbXovdCy4OU0X-wb5Lk393Iz2fbZdjBhW3iIgoWf1FJFMa-1LqVpGDBe66WXqrXWW7Ix_8mYN0lWX_obLlEWZBKXF_pl-ervAMN2nbHP81C67XF0xNSk6A"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Second slide label</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://cdn.stocksnap.io/img-thumbs/960w/coding-programming_U3W2SHOLWQ.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>Third slide label</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
