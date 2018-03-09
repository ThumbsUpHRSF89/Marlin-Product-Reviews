import React from 'react';

const KeywordFilter = (props) => {
  const { hotWord } = props;

  return (
    <div className="hotWordWrapper">
      <span className="hotWord" id={hotWord} onClick={props.keyWordClick}>{hotWord}</span>
    </div>
  );
};

export default KeywordFilter;
