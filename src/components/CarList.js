import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get('https://autodiscover-d1ql.onrender.com/api/cars');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
