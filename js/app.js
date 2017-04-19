import React from 'react';
import { render } from 'react-dom';
import MainComponent from './main-component';

const appContainer = document.getElementById('app');
import configureStore from './store';
import initialStore from './store/initial-store';

const store = configureStore(initialStore);

const renderApp = () => {
  render(<MainComponent store={ store } />, appContainer);
};

renderApp();
