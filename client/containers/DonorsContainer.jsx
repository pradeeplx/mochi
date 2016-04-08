import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/actioncreators';
import DonorTable from '../components/DonorTable';

export const DonorTableContainer = connect(
  state => ({ users: state.usersList }),
  dispatch => ({ actions: bindActionCreators({ fetchAllUsers }, dispatch) })
)(DonorTable);

export default DonorTableContainer;
