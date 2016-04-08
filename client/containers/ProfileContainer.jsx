import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actioncreators';
import Profile from '../components/Profile';
import {
  getDonorOriginYear,
  getDonorLastDate,
  getDonorLastDonation,
  getDonorDonationTotal,
} from '../selectors/userselectors';

export const ProfileContainer = connect(
  state => ({
    profile: state.userProfile,
    originYear: getDonorOriginYear(state),
    lastInteraction: getDonorLastDate(state),
    lastDonation: getDonorLastDonation(state),
    totalDonations: getDonorDonationTotal(state),
  }),
  dispatch => ({ actions: bindActionCreators({ fetchUser }, dispatch) })
)(Profile);

export default ProfileContainer;
