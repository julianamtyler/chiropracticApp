import React from 'react';
import './navigationStyle.css';

const Navigation = (props) => (
    <div  className="navBar">
        <div className="headerDiv">
        Call today: (678) 789 - 0070
        </div>
        <div className="menu">
            {props.children}
        </div>
    </div>
)

export default Navigation;