import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
import ReviewEntry from './reviewEntry';
import PageButtons from './pageButtons';

const TopCustomerReviews = (props) => {
  // getData() {
  //   const reviews = [];
  //   for (let i = 0; i < 5; i += 1) {
  //     reviews.push(this.props.reviews[i]);
  //   }
  //   this.setState({
  //     reviews,
  //   });
  // }

  // console.log('it is rerendering', this.props.reviews);
  const buttons = [];
  for (let i = 1; i <= props.totalPages; i += 1) {
    buttons.push(i);
  }

  return (
    <div>
      <h4>{props.title}</h4>
      <div className="navButtons">
        <button className="previous" onClick={props.onPrevClick}>Previous</button>
        {buttons.map(pageNumber => <PageButtons pageClickHandler={props.pageClickHandler} pageNumber={pageNumber} key={pageNumber} />)}
        <button className="next" onClick={props.onNextClick}>Next</button>
      </div>
      {props.reviews.map(review => <ReviewEntry review={review} key={review._id} />)}
      <div className="navButton">
        <button className="previous" onClick={props.onPrevClick}>Previous</button>
        {buttons.map(pageNumber => <PageButtons pageClickHandler={props.pageClickHandler} pageNumber={pageNumber} key={pageNumber} />)}
        <button className="next" onClick={props.onNextClick}>Next</button>
      </div>
    </div>
  );
};

export default TopCustomerReviews;
