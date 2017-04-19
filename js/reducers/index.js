import { combineReducers } from 'redux';
import loader from './loader';
import login from './login';
import chat from './chat';
import { createReducers } from '../utils/createReducers';

const reducers = {
  loader,
  login,
  chat
};

const rootReducer = combineReducers(createReducers(reducers));

export default rootReducer;
