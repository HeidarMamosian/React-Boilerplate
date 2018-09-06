import React from 'react';

import {NavLink} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return (
            <div className="Header">
                <h1>Header</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact-US</NavLink>
            </div>
        );
    }
}


export default Header;
