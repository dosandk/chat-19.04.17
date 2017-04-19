import React, { Component } from 'react';
import Chat from './containers/chat';
import Loader from './containers/loader';
import Login from './containers/login';
import WS from './containers/ws';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Chat/>
        <Loader/>
        <Login/>
        <WS/>
      </div>
    );
  }
}

export default MainComponent;
