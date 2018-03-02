import React from 'react';
import ReviewEntry from './reviewEntry';

const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <div>
      <h4>Top Customer Reviews</h4>
      {reviews.map((review) => <ReviewEntry review={review} key={review._id} />)}
      <button className="previous">Previous</button>
      <button className="page">1</button>
      <button className="page">2</button>
      <button className="page">3</button>
      <button className="page">4</button>
      <button className="next">Next</button>
    </div>
  );
};

export default ReviewList;
