import React from 'react';
import ReactDOM from 'react-dom';
import ReviewSection from './reviewSection';
import '../dist/styles.css';


ReactDOM.render(<ReviewSection />, document.getElementById('reviewSection'));
window.ReviewSection = ReviewSection;
