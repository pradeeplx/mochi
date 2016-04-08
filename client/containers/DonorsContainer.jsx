import { connect } from 'react-redux';
import DonorTable from '../components/DonorTable';

export const DonorTableContainer = connect(
  state => ({ users: state.usersList })
)(DonorTable);

export default DonorTableContainer;
