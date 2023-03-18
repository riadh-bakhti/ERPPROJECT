import React from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
            <nav className='Nav '> 
                <div className='logo'>
                  <a>GoMyErp</a>
                </div> 
                <div>
                   <ul className='nav-links'>
                        <li><a>A propos</a></li>
                        <li><a>Solution</a></li>
                        <li><a>Tarifs</a></li>
                    </ul>
                </div>
                <div className='sign'>
                <Link to='/Login'><button type="button" class="btn btn-primary">Sign in</button></Link>
                <button type="button" class="btn btn-secondary">Sign up</button>
                    
                </div>
            </nav>
    );
}

export default Navbar;
