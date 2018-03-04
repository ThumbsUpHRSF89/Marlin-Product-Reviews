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
    };
  }

  componentDidMount() {
    const { location: { pathname } } = window;
    const productID = pathname.slice(0, -1).split('/').pop();
    $.get('/hooligan', { productID }, (data) => {
      this.setState({
        reviews: data,
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
          <div className="keywordFilter">
            <KeywordFilter />
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

ReactDOM.render(<ReviewSection />, document.getElementById('reviewSection'));
