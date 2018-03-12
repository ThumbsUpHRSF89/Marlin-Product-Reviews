import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Histogram from './components/histogram';
import CustomerImages from './components/customerImages';
import RecentReviews from './components/recentReviews';
import KeywordFilter from './components/keywordFilter';
import TopCustomerReviews from './components/topCustomerReviews';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviewsHolder: [],
      allReviews: [],
      currentViewReviews: [],
      hotWordsArray: [],
      topCustomerReviewsTitle: 'Top Customer Reviews',
      filter: null,
      currentPage: 1,
      totalPages: 1,
      reviewsPerPage: 5,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { location: { pathname } } = window;
    const productID = pathname.slice(0, -1).split('/').pop();
    $.get('http://localhost:8002/productReviews', { productID }, (data) => {
      // console.log(data);
      const hotWords = {};
      let hotWordsArray = [];
      data.map((review) => {
        const headerWords = review.header.split(' ');
        const textWords = review.text.split(' ');
        // count words in header
        for (let i = 0; i < headerWords.length; i += 1) {
          if (hotWords[headerWords[i]] !== undefined) {
            hotWords[headerWords[i]] += 1;
          } else {
            hotWords[headerWords[i]] = 1;
          }
        }
        // count words in text
        for (let i = 0; i < textWords.length; i += 1) {
          if (hotWords[headerWords[i]] !== undefined) {
            hotWords[headerWords[i]] += 1;
          } else {
            hotWords[headerWords[i]] = 1;
          }
        }
        // delete words that are smaller than 3 characters or less OR words that appear less than 3 times, or undefined
        const hotWordsKeyArray = Object.keys(hotWords);
        for (let i = 0; i < hotWordsKeyArray.length; i += 1) {
          if (hotWordsKeyArray[i].length < 4 || hotWords[hotWordsKeyArray[i]] < 2 || hotWordsKeyArray[i] === 'undefined') {
            delete hotWords[hotWordsKeyArray[i]];
          }
        }
        // object.keys put hotwords in an array to map easier
        hotWordsArray = Object.keys(hotWords);
      });
      this.setState({
        allReviewsHolder: data,
        allReviews: data,
        currentViewReviews: data.slice(0, this.state.reviewsPerPage - 1),
        hotWordsArray,
        totalPages: Math.ceil(data.length / this.state.reviewsPerPage),
      });
    });
  }

  keyWordClickHandler(e) {
    if (this.state.filter === e.target.id) {
      this.setState({
        currentViewReviews: this.state.allReviewsHolder,
        allReviews: this.state.allReviewsHolder,
        filter: null,
        totalPages: Math.ceil(this.state.allReviewsHolder.length / this.state.reviewsPerPage),
        topCustomerReviewsTitle: 'Top Customer Reviews',
      });
    } else {
      const reviewsWithKeyWord = this.state.allReviewsHolder.filter((review) => {
        if (review.text.indexOf(e.target.id) !== -1 || review.header.indexOf(e.target.id) !== -1) {
          return true;
        }
      });

      this.setState({
        currentViewReviews: reviewsWithKeyWord,
        allReviews: reviewsWithKeyWord,
        filter: e.target.id,
        totalPages: Math.ceil(reviewsWithKeyWord.length / this.state.reviewsPerPage),
        topCustomerReviewsTitle: `Showing reviews with "${e.target.id}"`,
      });
    }
  }

  pageClickHandler(e) {
    if (this.state.currentPage !== Number(e.target.id)) {
      const currentViewReviews = [];
      const currentPage = Number(e.target.id);
      const start = (currentPage * this.state.reviewsPerPage) - this.state.reviewsPerPage;
      const end = currentPage * this.state.reviewsPerPage;
      for (let i = start; i < end; i += 1) {
        currentViewReviews.push(this.state.allReviews[i]);
      }
      this.setState({
        currentPage,
        currentViewReviews,
        totalPages: Math.ceil(this.state.allReviews.length / this.state.reviewsPerPage),
      });
    }
  }

  nextClickHandler() {
    if (this.state.currentPage < this.state.totalPages) {
      const currentViewReviews = [];
      const currentPage = this.state.currentPage + 1;
      const start = (currentPage * this.state.reviewsPerPage) - this.state.reviewsPerPage;
      const end = currentPage * this.state.reviewsPerPage;
      for (let i = start; i < end; i += 1) {
        currentViewReviews.push(this.state.allReviews[i]);
      }
      this.setState({
        currentPage,
        currentViewReviews,
        totalPages: Math.ceil(this.state.allReviews.length / this.state.reviewsPerPage),

      });
    }
  }

  prevClickHandler() {
    if (this.state.currentPage > 1) {
      const currentViewReviews = [];
      const currentPage = this.state.currentPage - 1;
      const start = (currentPage * this.state.reviewsPerPage) - this.state.reviewsPerPage;
      const end = currentPage * this.state.reviewsPerPage;
      for (let i = start; i < end; i += 1) {
        currentViewReviews.push(this.state.allReviews[i]);
      }
      this.setState({
        currentPage,
        currentViewReviews,
        totalPages: Math.ceil(this.state.allReviews.length / this.state.reviewsPerPage),
      });
    }
  }

  render() {
    // console.log('currentViewReviews:', this.state.currentViewReviews, 'allReviews:', this.state.allReviews, 'filter:', this.state.filter);
    return (
      <div className="fullPage">
        <div className="left-column">
          <h3 className="sectionTitle">Customer Reviews</h3>
          <div className="histogram">
            <Histogram reviews={this.state.allReviewsHolder} />
          </div>
          <div className="keywordFilterSection">
            <h4 className="keywordFilterTitle">Read reviews that mention</h4>
            <div className="keywordFilter">
              {this.state.hotWordsArray.map(hotWord => <KeywordFilter filter={this.state.filter} hotWord={hotWord} keyWordClick={this.keyWordClickHandler.bind(this)} key={hotWord} />)}
            </div>
          </div>
          <div id="topCustomerReviews">
            <TopCustomerReviews reviews={this.state.currentViewReviews} onPrevClick={this.prevClickHandler.bind(this)} onNextClick={this.nextClickHandler.bind(this)} pageClickHandler={this.pageClickHandler.bind(this)} totalPages={this.state.totalPages} title={this.state.topCustomerReviewsTitle} />
          </div>
        </div>
        <div className="right-column">
          <div className="customerImagesSection">
            <CustomerImages images={this.state.customerImages} />
          </div>
          <div className="recentReviewsSection">
            <RecentReviews />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSection;
// ReactDOM.render(<ReviewSection />, document.getElementById('reviewSection'));
