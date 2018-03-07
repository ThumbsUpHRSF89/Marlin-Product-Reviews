import React from 'react';

const KeywordFilter = (props) => {
  const { hotWord } = props;

  return (
    <div className="hotWordWrapper">
      <span className="hotWord">{hotWord}</span>
    </div>
  );
};

export default KeywordFilter;
