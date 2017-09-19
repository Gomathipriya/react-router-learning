import React from 'react';
import {Link} from 'react-router';

const RegPage = (props) => {
  return (
    <div>
      <br />
      <Link to='/register'></Link>&nbsp;
      <Link to='/register/regSuccess'></Link>
      {props.children}
    </div>
  );
};

export default RegPage;
