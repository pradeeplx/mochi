import { connect } from 'react-redux';
import { App } from '../components';

// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/actioncreators.js';
// dispatch => ({actions: bindActionCreators(actions, dispatch)})

export const AppContainer = connect(
  state => (state),
)(App);

export default AppContainer;
