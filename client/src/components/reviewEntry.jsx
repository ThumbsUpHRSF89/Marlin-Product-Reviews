import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div className="reviewEntry">
      <div className="profileBanner">
        <img className="profileImage" src="/images/profile1.png" alt="profile" />
        <span className="username">{props.review.username}</span>
      </div>
      <div className="starHeader">
        <div className="stars">{props.review.rating}</div>
        <h5 className="header">{props.review.header}</h5>
      </div>
      <div className="date">{props.review.date}</div>
      <div className="verified">Verified Purchase</div>
      <p>{props.review.text}</p>
      <div>
        <span className="commentLink">Comment</span>
        <span className="useful">Was this review helpful to you?</span>
        <button className="yesNo">Yes</button>
        <button className="yesNo">No</button>
      </div>
    </div>
  );
};

export default ReviewEntry;
