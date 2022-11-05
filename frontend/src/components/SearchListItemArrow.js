import React, { Component } from 'react';

class SearchListItemArrow extends Component {
    render() {
        return (
            <div className="andes-list__item-second-column">
                <span className="andes-list__item-tertiary andes-list__item-tertiary--centered">
                    <div className="sc-ui-option-value__tertiary">
                        <div className="sc-ui-icon sc-ui-chevron--down">
                            <svg width="100" height="100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <g className="sc-ui-chevron__container">
                                    <line clasName="sc-ui-chevron__line1" stroke="#2b87fb" x1="10" y1="50" x2="50" y2="50"></line>
                                    <line clasName="sc-ui-chevron__line2" stroke="#2b87fb" x1="90" y1="50" x2="50" y2="50"></line>
                                </g>                                                                
                            </svg>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}

export default SearchListItemArrow;