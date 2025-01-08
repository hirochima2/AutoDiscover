import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ carId }) => {
  const [review, setReview] = useState({ user: '', rating: '', comment: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://autodiscover-d1ql.onrender.com/api/cars/${carId}/reviews`, review);
    // Reset form or handle success
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" onChange={(e) => setReview({ user : e.target.value, rating: review.rating, comment: review.comment })} />
      <input type="number" placeholder="Rating (1-5)" onChange={(e) => setReview({ user: review.user, rating: e.target.value, comment: review.comment })} />
      <textarea placeholder="Comment" onChange={(e) => setReview({ user: review.user, rating: review.rating, comment: e.target.value })}></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
