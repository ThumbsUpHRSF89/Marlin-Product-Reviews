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

  const ratingsToText = {
    0: 'zero',
    0.5: 'half',
    1: 'one',
    1.5: 'oneHalf',
    2: 'two',
    2.5: 'twoHalf',
    3: 'three',
    3.5: 'threeHalf',
    4: 'four',
    4.5: 'fourHalf',
    5: 'five',
  };

  const starUrl = `images/stars/${ratingsToText[rating]}Stars.png`;
  const altText = `${rating} star rating`;

  return (
    <div className="reviewEntry">
      <div className="profileBanner">
        <img className="profileImage" src="images/profile1.png" alt="profile" />
        <span className="username">{username}</span>
      </div>
      <div className="starHeader">
        <img className="stars" src={starUrl} alt={altText} />
        {/* <div className="stars">{rating}</div> */}
        <h5 className="header">{header}</h5>
      </div>
      <div className="date">{date}</div>
      <div className="verified">Verified Purchase</div>
      <p className="reviewText">{text}</p>
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
