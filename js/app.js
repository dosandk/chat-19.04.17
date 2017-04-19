import React from 'react';
import { render } from 'react-dom';
import MainComponent from './main-component';

const appContainer = document.getElementById('app');

const renderApp = () => {
  render(<MainComponent/>, appContainer);
};

renderApp();
