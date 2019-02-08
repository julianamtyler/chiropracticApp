import React from 'react';
import Header from './Header';
import Social from './Social';
import './header.css';

const Navigation = (props) => (
    <div className="navBar">
        <div className="headerDiv">
           <Header/>
        </div>
        <div className="menu">
            {props.children}
        </div>
        <Social/>
    </div>
)

export default Navigation;