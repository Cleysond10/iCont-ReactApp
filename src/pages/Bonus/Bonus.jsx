import React from 'react';
import { Table } from 'react-bootstrap';
import './Bonus.css';

export default function Bonus() {
  const countSaved = Number(localStorage.getItem('countSaved'));

  return (
    <>
      <div className="m-4">
        {`In this page, you will find your saved value ( = ${countSaved} ) converted to how many units, dozens, hundreds and even thousands it has!`}
      </div>

      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Units</th>
            <th>Dozens</th>
            <th>Hundreds</th>
            <th>Thousands</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countSaved}</td>
            <td>{Math.floor((countSaved / 10))}</td>
            <td>{Math.floor((countSaved / 100))}</td>
            <td>{Math.floor((countSaved / 1000))}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
