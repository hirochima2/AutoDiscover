import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get('https://autodiscover-server.onrender.com/api/cars');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/cars/${car.id}`}>{car.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
