import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ListItems(props) {

    return (
        <a className="list-group-item list-group-item-action" href="#" 
        onClick={props.click} 
        data-next={props.next} 
        data-previous={props.previous} 
        data-code={props.code} 
        data-name={props.name} >
            <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}} >
                {props.name}
                {props.next!="0" ? <FontAwesomeIcon icon={faChevronRight} /> : <></>}
            </div>
        </a>
        
    )
};

export default ListItems;