import React from 'react';
// import Profile1 from '../../dist/images/profile1.png';

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

  const ratingsToImages = {
    0: 'https://i.imgur.com/Rkgfr0G.png',
    0.5: 'https://i.imgur.com/s2QICNo.png',
    1: 'https://i.imgur.com/d2D5zpv.png',
    1.5: 'https://i.imgur.com/UAF0Me4.png',
    2: 'https://i.imgur.com/B2Bmx6i.png',
    2.5: 'https://i.imgur.com/u8ZNfDc.png',
    3: 'https://i.imgur.com/c4dbZIj.png',
    3.5: 'https://i.imgur.com/fMoxZsH.png',
    4: 'https://i.imgur.com/IzbFlA3.png',
    4.5: 'https://i.imgur.com/gz25F3Z.png',
    5: 'https://i.imgur.com/rBSNt0s.png',
  };

  const starUrl = ratingsToImages[rating];
  // const starUrl = `images/${ratingsToText[rating]}Stars.png`;
  const altText = `${rating} star rating`;

  return (
    <div className="reviewEntry">
      <div className="profileBanner">
        <img className="profileImage" src="https://i.imgur.com/UStIY6n.jpg" alt="profile" />
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
