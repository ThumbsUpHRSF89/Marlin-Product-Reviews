import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewEntry from './reviewEntry';

class TopCustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      currentPage: 1,
    };
  }

  componentWillReceiveProps() {
    this.setState(this.props.reviews);
    console.log('props:', this.props.reviews);
  }

  nextPageHandler(e) {
    // console.log('props:', this.props.reviews[0]);
    const reviews = [];
    const currentPage = Number(e.target.id);
    const start = (currentPage * 5) - 5;
    const end = currentPage * 5;
    for (let i = start; i < end; i += 1) {
      reviews.push(this.props.reviews[i]);
    }
    this.setState({
      reviews,
      currentPage,
    });
  }

  render() {
    return (
      <div>
        <h4>Top Customer Reviews</h4>
        <div className="navButtons">
          <button className="previous">Previous</button>
          <button className="page" id="1" onClick={this.nextPageHandler.bind(this)}>1</button>
          <button className="page" id="2" onClick={this.nextPageHandler.bind(this)}>2</button>
          <button className="page" id="3" onClick={this.nextPageHandler.bind(this)}>3</button>
          <button className="page" id="4" onClick={this.nextPageHandler.bind(this)}>4</button>
          <button className="next">Next</button>
        </div>
        {this.state.reviews.map(review => <ReviewEntry review={review} key={review._id} />)}
        <div className="navButton">
          <button className="previous">Previous</button>
          <button className="page" id="1" onClick={this.nextPageHandler.bind(this)}>1</button>
          <button className="page" id="2" onClick={this.nextPageHandler.bind(this)}>2</button>
          <button className="page" id="3" onClick={this.nextPageHandler.bind(this)}>3</button>
          <button className="page" id="4" onClick={this.nextPageHandler.bind(this)}>4</button>
          <button className="next">Next</button>
        </div>
      </div>
    );
  }
}

export default TopCustomerReviews;
