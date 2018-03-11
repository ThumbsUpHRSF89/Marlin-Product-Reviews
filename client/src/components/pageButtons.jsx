import React from 'react';

const PageButtons = (props) => {

  return (
    <button className="page" id={props.pageNumber} onClick={props.pageClickHandler}>{props.pageNumber}</button>
  );
};

export default PageButtons;
