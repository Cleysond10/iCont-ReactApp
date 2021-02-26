import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from './components/Button/Button';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [countPrint, setCountPrint] = useState('');

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('iCounter is already Zero');
    }
  };

  return (
    <div className="div">
      <Row>
        <Col>
          <h1>
            {`iCounter: ${count}`}
          </h1>

          <Button
            type="button"
            onClick={() => { setCount(count + 1); }}
          >
            +
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={handleClick}
          >
            -
          </Button>
          <Button
            variant="warning"
            type="button"
            onClick={() => { setCount(0); }}
          >
            Reset
          </Button>
          <br />

        </Col>
        <Col>
          <h2>
            {`Saved Value: ${countPrint}`}
          </h2>
          <Button
            variant="primary"
            type="button"
            onClick={() => { setCountPrint(count); }}
          >
            Save
          </Button>
          <Button
            variant="light"
            type="button"
            onClick={() => { setCountPrint(''); }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
}
