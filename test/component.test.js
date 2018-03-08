import React from 'react';
import ReviewSection from '../client/src/reviewSection';
import CustomerImages from '../client/src/components/customerImages';
import Histogram from '../client/src/components/histogram';
import KeywordFilter from '../client/src/components/keywordFilter';
import PageButtons from '../client/src/components/pageButtons';
import RecentReviews from '../client/src/components/recentReviews';
import ReviewEntry from '../client/src/components/reviewEntry';
import ReviewList from '../client/src/components/reviewList';


describe('<ReviewSection />', () => {
  it('renders 1 <ReviewSection /> component', () => {
    const component = shallow(<ReviewSection />);
    expect(component).toHaveLength(1);
  });
});

describe('<CustomerImages />', () => {
  it('renders 1 <ReviewSection /> component', () => {
    const component = shallow(<CustomerImages />);
    expect(component).toHaveLength(1);
  });
});

describe('<Histogram />', () => {
  it('renders 1 <Histogram /> component', () => {
    const component = shallow(<Histogram />);
    expect(component).toHaveLength(1);
  });
});

describe('<KeywordFilter />', () => {
  it('renders 1 <KeywordFilter /> component', () => {
    const component = shallow(<KeywordFilter />);
    expect(component).toHaveLength(1);
  });
});

describe('<PageButtons />', () => {
  it('renders 1 <PageButtons /> component', () => {
    const component = shallow(<PageButtons />);
    expect(component).toHaveLength(1);
  });
});

describe('<ReviewList />', () => {
  it('renders 1 <ReviewList /> component', () => {
    const component = shallow(<ReviewList />);
    expect(component).toHaveLength(1);
  });
});