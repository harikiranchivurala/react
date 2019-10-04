import React from 'react';
import './Industry.css';

const Industry = (props) => {
    return (
        <div>
           <div className="industry-container-icon">{props.name}</div>
        </div>
    )
}
export default Industry;