import React from 'react';

const KeywordFilter = (props) => {
  const { hotWord, filter } = props;
  let className = 'hotWord';
  if (hotWord === filter) {
    className = 'hotWordHighlight';
  }

  return (
    <div className="hotWordWrapper">
      <span className={className} id={hotWord} onClick={props.keyWordClick}>{hotWord}</span>
    </div>
  );
};

export default KeywordFilter;
