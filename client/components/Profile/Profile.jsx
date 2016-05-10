import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import AddEventControls from './AddEventControls';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';
import KeepInTouch from './KeepInTouch';
import MochifyControls from '../Mochify/MochifyControls';
import ProfileExtras from './ProfileExtras';

export class Profile extends React.Component {

  componentWillMount() {
    const { fetchUser } = this.props.actions;
    const { username = 'unknown' } = this.props;
    fetchUser(username);
  }

  componentWillReceiveProps({ username: newUsername }) {
    const { username } = this.props;
    const { fetchUser } = this.props.actions;

    if (username !== newUsername) {
      fetchUser(newUsername);
    }
  }

  render() {
    const {
      profile = {},
      originYear,
      lastInteraction,
      lastDonation,
      totalDonations,
      username,
      router,
    } = this.props;

    console.debug(`Render Profile for username=${username}`);

    const { submitUserEvent } = this.props.actions;

    return (
      <div className="col-md-7 col-md-offset-1 main profile">
        <div className="profile-header">
          <Avatar photo={profile.photo}>
            {`${profile.first} ${profile.last}`}
          </Avatar>
          <MochifyControls
            reMochify={!!profile.twitter}
            router={router}
          />
          <AddEventControls username={username} addEvent={submitUserEvent} />
        </div>
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
        <ProfileExtras
          images={profile.details || []}
          twitterHandle={profile.twitter}
        />
        <KeepInTouch
          first={profile.first}
          username={username}
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
  router: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
};

export default Profile;
