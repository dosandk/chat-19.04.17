import React, {Component} from 'react';
import Login from '../components/login';
import { connect } from 'react-redux';
import * as loginActions from '../actions/login';
import { bindActionCreators } from 'redux';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = ({ login }) => ( { login } );
const mapActionsToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
