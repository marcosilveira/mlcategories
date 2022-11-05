import React from 'react';

function SearchListTitle(props) {
  return (
    <div className="searchable-option-values-container__title">
        <div className="searchable-option-values-container__title__options">
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default SearchListTitle;