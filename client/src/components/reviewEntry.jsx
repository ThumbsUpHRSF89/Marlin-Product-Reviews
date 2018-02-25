import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div className="reviewEntry">
      <div>Profile Photo</div>
      <div>{props.review.username}</div>
      <div>{props.review.rating}</div>
      <h5>{props.review.header}</h5>
      <div>{props.review.date}</div>
      <p>{props.review.text}</p>
    </div>
  );
};

export default ReviewEntry;
