import { LOGIN, LOGOUT } from '../constants/login';

export {
  login,
  logout
};

function login() {
  return {
    type: LOGIN,
    payload: {

    }
  };
}

function logout() {
  return {
    type: LOGOUT,
    payload: {

    }
  };
}
