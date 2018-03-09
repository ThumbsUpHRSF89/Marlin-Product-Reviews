import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewEntry from './reviewEntry';
import PageButtons from './pageButtons';

class TopCustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
      totalPages: 0,
      newReviewsInProps: false,
    };
  }

  componentDidUpdate() {
    // console.log('reviewList, componentDidUpdate, props:', this.props);
    // console.log('reviewList, comonentDidUpdate, state:', this.state);

    // conditions below are to make sure this.getData() function executes when props have changed and state needs to update,
    // otherwise don't run did update again or it will infinite

    // JSON.stringify(this.state.reviews) !== JSON.stringify(this.props.reviews)
    // this.state.reviews === 0

    if (this.state.newReviewsInProps === false) {
      this.getData();
    }
  }

  getData() {
    const reviews = [];
    for (let i = 0; i < 5; i += 1) {
      reviews.push(this.props.reviews[i]);
    }
    this.setState({
      reviews,
      totalPages: Math.ceil(this.props.reviews.length / 5),
    });
  }

  pageClickHandler(e) {
    if (this.state.currentPage !== Number(e.target.id)) {
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
  }

  nextClickHandler() {
    if (this.state.currentPage < this.state.totalPages) {
      const reviews = [];
      const currentPage = this.state.currentPage + 1;
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
  }

  prevClickHandler() {
    if (this.state.currentPage > 1) {
      const reviews = [];
      const currentPage = this.state.currentPage - 1;
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
  }

  render() {
    // console.log('it is rerendering', this.props.reviews);
    const buttons = [];
    for (let i = 1; i <= this.state.totalPages; i += 1) {
      buttons.push(i);
    }

    return (
      <div>
        <h4>{this.props.title}</h4>
        <div className="navButtons">
          <button className="previous" onClick={this.prevClickHandler.bind(this)}>Previous</button>
          {buttons.map(pageNumber => <PageButtons pageClickHandler={this.pageClickHandler.bind(this)} pageNumber={pageNumber} key={pageNumber} />)}
          <button className="next" onClick={this.nextClickHandler.bind(this)}>Next</button>
        </div>
        {this.state.reviews.map(review => <ReviewEntry review={review} key={review._id} />)}
        <div className="navButton">
          <button className="previous" onClick={this.prevClickHandler.bind(this)}>Previous</button>
          {buttons.map(pageNumber => <PageButtons pageClickHandler={this.pageClickHandler.bind(this)} pageNumber={pageNumber} key={pageNumber} />)}
          <button className="next" onClick={this.nextClickHandler.bind(this)}>Next</button>
        </div>
      </div>
    );
  }
}

export default TopCustomerReviews;
