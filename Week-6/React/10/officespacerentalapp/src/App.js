import React from 'react';
import officeImg from './office.png';

const element = "Office Space";
const jsxatt = <img src={officeImg} width="10%" height="10%" alt="Office Space" />;
const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

const offices = [
  { Name: "DBS", Rent: 50000, Address: "Chennai" },
  { Name: "Regus", Rent: 75000, Address: "Bangalore" },
  { Name: "WeWork", Rent: 55000, Address: "Mumbai" },
  { Name: "Innov8", Rent: 65000, Address: "Delhi" }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{element} , at Affordable Range </h1>
      {jsxatt}
      <hr />

      <h1>Name: {ItemName.Name}</h1>
      <h3 style={{ color: ItemName.Rent < 60000 ? 'red' : 'green' }}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />
      <h2>All Offices:</h2>
      {offices.map((office, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <h1>Name: {office.Name}</h1>
          <h3 style={{ color: office.Rent < 60000 ? 'red' : 'green' }}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
