import React from 'react';

const Login = ({login, loginUser, logoutUser}) => {
  return <div>
    <div>Login: { login.username }</div>
    <div style={{ outline: '1px solid red'}} onClick={ loginUser }>Click me</div>
  </div>
};

export default Login;
