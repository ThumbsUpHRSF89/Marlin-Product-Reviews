import React from 'react';

const CustomerImages = (props) => {
  const {} = props;

  return (
    <div>
      <h4 className="customerImageTitle">Customer Images</h4>
      <div className="customerImages">
        <img className="customerImage" src="images/customerImage1.jpg" alt="customer" />
        <img className="customerImage" src="images/customerImage2.jpg" alt="customer" />
        <img className="customerImage" src="images/customerImage3.jpg" alt="customer" />
        <img className="customerImage" src="images/customerImage4.jpg" alt="customer" />
      </div>
      <p className="smallTextLink">See all customer images</p>
    </div>
  );
};

export default CustomerImages;
