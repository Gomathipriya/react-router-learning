import React from 'react';
import {Link} from 'react-router';

const LoginPage = (props) => {
  return (
    <div>
      <br />
      <Link to='/login'></Link>&nbsp;
      <Link to='/login/loginSuccess'></Link>
      {props.children}
    </div>
  );
};

export default LoginPage;
