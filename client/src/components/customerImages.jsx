import React from 'react';

const CustomerImages = (props) => {
  const {} = props;

  return (
    <div>
      <h4 className="customerImageTitle">Customer Images</h4>
      <div className="customerImages">
        <img className="customerImage" src="https://i.imgur.com/HogqdKx.jpg" alt="customer" />
        <img className="customerImage" src="https://i.imgur.com/nBFa6dU.jpg" alt="customer" />
        <img className="customerImage" src="https://i.imgur.com/3TvC7ef.jpg" alt="customer" />
        <img className="customerImage" src="https://i.imgur.com/Azm5vRu.jpg" alt="customer" />
      </div>
      <p className="smallTextLink">See all customer images</p>
    </div>
  );
};

export default CustomerImages;
