import React from 'react';
import './Button.css';
import { Button } from 'react-bootstrap';

export default function index({ children, onClick, ...otherProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button className="button" type="button" variant="success" size="lg" onClick={onClick} {...otherProps}>{children}</Button>
  );
}
