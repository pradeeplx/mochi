import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

export class Profile extends React.Component {
  componentWillMount() {
    const { fetchUser } = this.props.actions;
    const { username = 'unknown' } = this.props;
    fetchUser(username);
  }

  render() {
    // console.log('YOLO');
    const {
      profile = {}, originYear, lastInteraction, lastDonation, totalDonations,
    } = this.props;

    return (
      <div className="col-md-7 col-md-offset-1 main profile">
        <Avatar photo={profile.photo}>
          {`${profile.first} ${profile.last}`}
        </Avatar>
        <SummaryStats
          sinceYear={originYear}
          lastDate={lastInteraction}
          lastAmount={lastDonation}
          totalAmount={totalDonations}
        />
        <ContactInfo
          email={profile.email}
          phone={profile.phoneNumber}
          twitter={profile.twitter}
          city={profile.city}
          state={profile.state}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  originYear: PropTypes.number,
  lastInteraction: PropTypes.string,
  lastDonation: PropTypes.number,
  totalDonations: PropTypes.number,
  username: PropTypes.string,
  actions: PropTypes.object,
};

export default Profile;
