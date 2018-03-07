import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Histogram from './components/histogram';
import CustomerImages from './components/customerImages';
import RecentReviews from './components/recentReviews';
import KeywordFilter from './components/keywordFilter';
import TopCustomerReviews from './components/reviewList';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      hotWordsArray: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { location: { pathname } } = window;
    const productID = pathname.slice(0, -1).split('/').pop();
    $.get('http://localhost:8002/hooligan', { productID }, (data) => {
      console.log(data);
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
        // delete words that are smaller than 3 characters or less OR words that appear less than 3 times
        const hotWordsKeyArray = Object.keys(hotWords);
        for (let i = 0; i < hotWordsKeyArray.length; i += 1) {
          if (hotWordsKeyArray[i].length < 4 || hotWords[hotWordsKeyArray[i]] < 2) {
            delete hotWords[hotWordsKeyArray[i]];
          }
        }
        // object.keys put hotwords in an array to map easier
        hotWordsArray = Object.keys(hotWords);
      });
      this.setState({
        reviews: data,
        hotWordsArray,
      });
    });
  }

  render() {
    return (
      <div className="fullPage">
        <div className="left-column">
          <h3 className="sectionTitle">Customer Reviews</h3>
          <div className="histogram">
            <Histogram reviews={this.state.reviews} />
          </div>
          <div className="keywordFilterSection">
            <h4 className="keywordFilterTitle">Read reviews that mention</h4>
            <div className="keywordFilter">
              {this.state.hotWordsArray.map(hotWord => <KeywordFilter hotWord={hotWord} key={hotWord} />)}
            </div>
          </div>
          <div id="topCustomerReviews">
            <TopCustomerReviews reviews={this.state.reviews} />
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
