import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actioncreators';
import Profile from '../components/Profile';

export const ProfileContainer = connect(
  state => ({ profile: state.userProfile, events: state.userEvents }),
  dispatch => ({ actions: bindActionCreators({ fetchUser }, dispatch) })
)(Profile);

export default ProfileContainer;
