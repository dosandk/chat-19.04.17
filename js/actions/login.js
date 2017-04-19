import { LOGIN, LOGOUT } from '../constants/login';

export {
  login,
  logout
};

function login(user) {
  return {
    type: LOGIN,
    payload: {
      user
    }
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}
