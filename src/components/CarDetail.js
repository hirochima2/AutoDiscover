import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

const CarDetail = ({ match }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await axios.get (`https://autodiscover-server.onrender.com/api/cars/${match.params.id}`);
      setCar(response.data);
      setLoading(false);
    };
    fetchCar();
  }, [match.params.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{car.name}</h2>
      <p>Engine Type: {car.engineType}</p>
      <p>Horsepower: {car.horsepower}</p>
      <p>Fuel Efficiency: {car.fuelEfficiency}</p>
      <p>Dimensions: {car.dimensions}</p>
      <ReviewForm carId={car.id} />
    </div>
  );
};

export default CarDetail;
