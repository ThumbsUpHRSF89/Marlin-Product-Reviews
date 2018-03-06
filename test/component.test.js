import React from 'react';
import ReviewSection from '../client/src/reviewSection';

describe('<ReviewSection />', () => {
  it('renders 1 <ReviewSection /> component', () => {
    const component = shallow(<ReviewSection />);
    expect(component).toHaveLength(1);
  });
});
