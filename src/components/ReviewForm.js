import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ carId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://autodiscover-server.onrender.com/api/cars/${carId}/reviews`, {
      review,
      rating,
    });
    setReview('');
    setRating(1);
    alert('Review submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit a Review</h3>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
        required
      />
      <div>
        <label>Rating: </label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star}</option>
          ))}
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
