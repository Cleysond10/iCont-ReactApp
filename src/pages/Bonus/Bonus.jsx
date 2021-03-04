import React from 'react';
import { Table } from 'react-bootstrap';
import './Bonus.css';

export default function Bonus() {
  const countSaved = Number(localStorage.getItem('countSaved'));

  return (
    <>
      <div className="m-4">
        {`In this page, you will find your saved counter ( = ${countSaved} ) converted to how many units, dozens, hundreds and even thousands it has!`}
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
          <tr className="lista">
            {/* number.slice(-1) */}
            <td>{countSaved}</td>
            <td>{(countSaved / 10).toFixed(0)}</td>
            <td>{(countSaved / 100).toFixed(0)}</td>
            <td>{(countSaved / 1000).toFixed(0)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
