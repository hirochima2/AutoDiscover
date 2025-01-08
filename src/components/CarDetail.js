import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

const CarDetail = ({ match }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await axios.get
