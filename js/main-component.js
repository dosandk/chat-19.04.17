import React, { Component } from 'react';
import { Provider } from 'react-redux';

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
      <Provider store={ this.props.store }>
        <div>
          <Chat/>
          <Loader/>
          <Login/>
          <WS/>
        </div>
      </Provider>
    );
  }
}

export default MainComponent;
