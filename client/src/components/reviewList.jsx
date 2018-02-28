import React from 'react';
import ReviewEntry from './reviewEntry';

const ReviewList = (props) => {
  console.log('props', props);
  const { reviews } = props;

  return (
    <div>
      <h4>Top Customer Reviews</h4>
      {reviews.map((review) => <ReviewEntry review={review} key={review._id} />)}
    </div>
  );
};

export default ReviewList;
