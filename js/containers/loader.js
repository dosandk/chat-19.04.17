import React, {Component} from 'react';
import Loader from '../components/loader';

class LoaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Loader/>
    );
  }
}

export default LoaderContainer;
