import React from 'react';

const KeywordFilter = (props) => {
  const { reviews } = props;

  const calculatePercent = (ratingNumber) => {
    let ratingAmt = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].rating === ratingNumber) {
        ratingAmt += 1;
      }
    }
    return (ratingAmt / reviews.length) * 100;
  };

  const ratingsToText = {
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

  const calculateAverageRating = () => {
    let total = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      total += reviews[i].rating;
    }
    return total / reviews.length;
  };

  const average = calculateAverageRating();

  function roundToHalf(num) {
    return Math.round(num * 2) / 2;
  }

  const totalRatingImageUrl = `images/stars/${ratingsToText[roundToHalf(average)]}stars.png`;

  return (
    <div>
      <div className="histogramHeader">
        <img className="totalStars" src={totalRatingImageUrl} alt="total average star rating" />
        <p className="totalReviews">{reviews.length}</p>
      </div>
      <p className="smallTextLink average">{average} out of 5 stars</p>
      <div className="histogramBar">
        <p className="smallTextLink">5 star</p>
        <div className="outerBar">
          <div className="innerBar five-star" style={{ width: `${calculatePercent(5)}%` }} />
        </div>
        <p className="smallTextLink percent">{calculatePercent(5)}%</p>
      </div>
      <div className="histogramBar">
        <p className="smallTextLink">4 star</p>
        <div className="outerBar">
          <div className="innerBar four-star" style={{ width: `${calculatePercent(4)}%` }} />
        </div>
        <p className="smallTextLink percent">{calculatePercent(4)}%</p>
      </div>
      <div className="histogramBar">
        <p className="smallTextLink">3 star</p>
        <div className="outerBar">
          <div className="innerBar three-star" style={{ width: `${calculatePercent(3)}%` }} />
        </div>
        <p className="smallTextLink percent">{calculatePercent(3)}%</p>
      </div>
      <div className="histogramBar">
        <p className="smallTextLink">2 star</p>
        <div className="outerBar">
          <div className="innerBar two-star" style={{ width: `${calculatePercent(2)}%` }} />
        </div>
        <p className="smallTextLink percent">{calculatePercent(2)}%</p>
      </div>
      <div className="histogramBar">
        <p className="smallTextLink">1 star</p>
        <div className="outerBar">
          <div className="innerBar one-star" style={{ width: `${calculatePercent(1)}%` }} />
        </div>
        <p className="smallTextLink percent">{calculatePercent(1)}%</p>
      </div>
    </div>
  );
};

export default KeywordFilter;
