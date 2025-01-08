import React from 'react';

const CarDetail = ({ car }) => {
  return (
    <div>
      <h3>{car.name}</h3>
      <p>Specifications: {car.specifications}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CarDetail;
