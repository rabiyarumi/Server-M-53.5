import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <NavLink to={'/'}>Home</NavLink> */}
            <NavLink to={'/Phones'} >Phones</NavLink>
        </div>
    );
};

export default Header;