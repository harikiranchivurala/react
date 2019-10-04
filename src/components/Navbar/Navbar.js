import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'

const navitems = (props) => {
    return <li className="li-item">{props.name} </li>;
}
export default navitems