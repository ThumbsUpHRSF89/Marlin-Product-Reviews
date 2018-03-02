import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import RatingsHistogram from './components/ratingsHistogram';
import ReviewList from './components/reviewList';
import CustomerImages from './components/customerImages';
import RecentReviews from './components/recentReviews';
import KeywordFilter from './components/keywordFilter';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      customerImages: [],
    };
  }

  componentDidMount() {
    const { location: { pathname } } = window;
    const productID = pathname.slice(0, -1).split('/').pop();
    console.log(productID);
    $.get('/hooligan', { productID }, (data) => {
      console.log('data recieved from server to component', data);
      this.setState({
        reviews: data,
      });
    });
  }

  render() {
    return (
      <div className="left-column">
        <div className="topCustomerReviews">
          <h3 className="sectionTitle">Customer Reviews</h3>
          <div>---HISTOGRAM</div>
          <KeywordFilter />
          <ReviewList reviews={this.state.reviews} />
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

ReactDOM.render(<ReviewSection />, document.getElementById('reviewSection'));
