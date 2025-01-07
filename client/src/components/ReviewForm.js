import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ carId }) => {
  const [review, setReview] = useState({ user: '', rating: '', comment: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://autodiscover-d1ql.onrender.com/api/cars/${carId}/reviews`, review);
    // Optionally, refresh the reviews or show a success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={review.user}
        onChange={(e) => setReview({ ...review, user: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={review.rating}
        onChange={(e) => setReview({ ...review, rating: e.target.value })}
        required
        min="1"
        max="5"
      />
      <textarea
        placeholder="Your Review"
        value={review.comment}
        onChange={(e) => setReview({ ...review, comment: e.target.value })}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
