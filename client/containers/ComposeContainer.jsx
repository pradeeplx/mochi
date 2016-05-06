import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser, submitUserEvent } from '../actions/actioncreators';
import Compose from '../components/Profile/Compose';

export const ComposeContainer = connect(
  state => ({
    profile: state.userProfile,
  }),
  dispatch => ({
    actions: bindActionCreators({ fetchUser, submitUserEvent }, dispatch),
  })
)(Compose);

export default ComposeContainer;
