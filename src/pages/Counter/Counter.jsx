import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import './Counter.css';

export default function Counter() {
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
    <div className="counter">
      <Row>
        <Col className="col1">
          <h1>
            {`iCounter: ${count}`}
          </h1>

          <Button
            size="lg"
            type="button"
            onClick={() => { setCount(count + 1); }}
          >
            +
          </Button>
          <Button
            size="lg"
            variant="danger"
            type="button"
            onClick={handleClick}
          >
            -
          </Button>
          <Button
            size="lg"
            variant="warning"
            type="button"
            onClick={() => { setCount(0); }}
          >
            Reset
          </Button>
          <br />

        </Col>
        <Col className="col2">
          <h2>
            {`Saved Value: ${countPrint}`}
          </h2>
          <Button
            size="lg"
            variant="primary"
            type="button"
            onClick={() => { setCountPrint(count); }}
          >
            Save
          </Button>
          <Button
            size="lg"
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
