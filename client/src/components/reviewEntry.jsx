import React from 'react';

const ReviewEntry = (props) => {

  const {
    product_id,
    username,
    text,
    rating,
    header,
    date,
  } = props.review;


  return (
    <div className="reviewEntry">
      <div className="profileBanner">
        <img className="profileImage" src="/images/profile1.png" alt="profile" />
        <span className="username">{username}</span>
      </div>
      <div className="starHeader">
        <div className="stars">{rating}</div>
        <h5 className="header">{header}</h5>
      </div>
      <div className="date">{date}</div>
      <div className="verified">Verified Purchase</div>
      <p>{text}</p>
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
