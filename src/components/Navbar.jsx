import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav>
            <Link to="/">Home</Link> 
            <Link to="/categories">Categories</Link> 
            <Link to="manufacturers">Manufacturers</Link>
        </nav>

    );
};

export default Navbar;