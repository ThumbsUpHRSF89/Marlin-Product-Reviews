import React from 'react';

const CustomerImages = (props) => {
  const {} = props;

  return (
    <div>
      <h4>Customer Images</h4>
      <img className="customerImage" src="images/customerImages/customerImage1.jpg" alt="customer" />
      <img className="customerImage" src="images/customerImages/customerImage2.jpg" alt="customer" />
      <img className="customerImage" src="images/customerImages/customerImage3.jpg" alt="customer" />
      <img className="customerImage" src="images/customerImages/customerImage4.jpg" alt="customer" />
    </div>
  );
};

export default CustomerImages;
