import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RatingsHistogram from './components/ratingsHistogram';
import ReviewList from './components/reviewList';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div>
        <h3>Customer Reviews</h3>
        <ReviewList />
      </div>
    );
  }
}

ReactDOM.render(<ReviewSection />, document.getElementById('ReviewSection'));
