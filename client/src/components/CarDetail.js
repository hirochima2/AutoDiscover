import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarDetail = ({ match }) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await axios.get(`https://autodiscover-d1ql.onrender.com/api/cars/${match.params.id}`);
      setCar(response.data);
    };
    fetchCar();
  }, [match.params.id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div>
      <h2>{car.brand} {car.model}</h2>
      <p>Specifications: {JSON.stringify(car.specifications)}</p>
      {/* Add more details and reviews here */}
    </div>
  );
};

export default CarDetail;
