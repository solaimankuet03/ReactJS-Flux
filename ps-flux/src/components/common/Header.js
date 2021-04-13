import React  from 'react';
import { NavLink } from 'react-router-dom';
function Header(){
    const activeStyle = { color:"orange"};
    return(
        <nav>
        <NavLink activeStyle={activeStyle} exact to="/">Home Page</NavLink> | <NavLink activeStyle={activeStyle} to="/Courses">Courses Page</NavLink> | {" "}
        <NavLink activeStyle={activeStyle} to="/CoursesPageFunctionComponent">Courses Page</NavLink> | {" "}
        <NavLink activeStyle={activeStyle} to="/About">About Page</NavLink>  
        </nav>
    );
}

export default Header;