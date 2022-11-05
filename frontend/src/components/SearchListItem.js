import React, { Component } from 'react';

function SearchListItem(props) {
    return (
        <div className="andes-list__item-first-column">
            <div className="andes-list__item-text">
                <span className="andes-list__item-primary">{props.name}</span>
            </div>
        </div>
    );
}

export default SearchListItem;