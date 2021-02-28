import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer({ children }) {
  return (
    <footer className="footer">
      <Row>
        <Col>
          <div className="footer__In">
            <a href="https://www.linkedin.com/in/cleyson-henrique-s-88790012a/">LinkedIn</a>
          </div>
        </Col>
        <Col>
          <div className="footer__git">
            <a href="https://github.com/Cleysond10/iCount-ReactApp">GitHub Page</a>
          </div>
        </Col>
        <Col>
          <p className="footer__copyright">{children}</p>
        </Col>
      </Row>

    </footer>
  );
}
