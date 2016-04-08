import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/actioncreators';
import Donors from '../components/Donors';

export const DonorsContainer = connect(
  state => ({ users: state.usersList }),
  dispatch => ({ actions: bindActionCreators({ fetchAllUsers }, dispatch) })
)(Donors);

export default DonorsContainer;
