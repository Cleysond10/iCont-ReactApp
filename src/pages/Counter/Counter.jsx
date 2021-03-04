import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Button from '../../components/Button/Button';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast.error('iCounter is already Zero');
    }
  };

  const onSave = () => {
    localStorage.setItem('countSaved', count);
    toast.info(`Value ${count} was saved.`);
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
          <br />
          <Button
            size="lg"
            variant="warning"
            type="button"
            onClick={() => { setCount(0); }}
          >
            Reset
          </Button>
          <Button
            size="lg"
            variant="dark"
            type="button"
            onClick={() => { setCount(Number(localStorage.getItem('countSaved'))); }}
          >
            Restore
          </Button>

        </Col>
        <Col className="col2">
          <h2>
            {`Saved Value: ${Number(localStorage.getItem('countSaved'))}`}
          </h2>
          <Button
            size="lg"
            variant="primary"
            type="button"
            onClick={onSave}
          >
            Save
          </Button>
          <Button
            size="lg"
            variant="light"
            type="button"
            onClick={() => { localStorage.removeItem('countSaved'); }}
          >
            Clear
          </Button>
        </Col>
      </Row>

    </div>
  );
}
