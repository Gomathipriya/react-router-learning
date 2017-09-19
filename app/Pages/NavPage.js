import React from 'react';
import {Link} from 'react-router';

const NavPage = (props) => {
  return (
    <div>
        <div className="top-bar">
			<div className="top-bar-left">
				<label id="navLabel"> Navigation Bar</label>
			</div>
			<div className="top-bar-right">
                <Link to='/register' id="registerButton">Register</Link>&nbsp;
                <Link to='/login' id="loginButton">Login</Link>
                <Link to='/' id="logoutBtn">Logout</Link>
            </div>
        </div>
    </div>
  );
};

export default NavPage;
