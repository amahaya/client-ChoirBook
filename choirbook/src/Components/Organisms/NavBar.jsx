import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
<nav>
    <ul className="navebar">
       <Link to="/"> <li> Home </li>  </Link>
       <Link to="/Profile"> <li> Profile</li> </Link>

    </ul>

 </nav>

    )
}