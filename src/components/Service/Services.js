import React, { Component } from 'react';
import './Services.css';
import ai from '../../assets/ai.png';
import crm from '../../assets/crm.png';
import devops from '../../assets/devops.png';
const services = (props) => {

    return (
        <div>

            <div className="grid-container">
                <div className="grid-image"><img src={props.url} width='70px' alt="no img" /><p className="font">{props.name} </p> </div>
            </div>
        </div>
    )
}
export default services;
