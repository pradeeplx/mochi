import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import AddEventControls from './AddEventControls';
import SummaryStats from './SummaryStats';
import ContactInfo from './ContactInfo';

const GPASS_DELAY = 6500;

export class Profile extends React.Component {

  componentWillMount() {
    const { fetchUser } = this.props.actions;
    const { username = 'unknown' } = this.props;
    fetchUser(username);
    if (username === 'gpass1') {
      window.setTimeout(() => {
        fetchUser('gpass2');
      }, GPASS_DELAY);
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
    } = this.props;
    // <img src="/images/ANIMATION.gif" />

    let gpassFancy = <span></span>;
    if (username === 'gpass1' && profile.photo) {
      gpassFancy = (
        <div className="row">
          <div className="col-md-6">
            <img className="img-responsive" src="/images/box1b.png" />
          </div>
          <div className="col-md-6">
            <img className="img-responsive" src="/images/box2.png" />
          </div>
        </div>
      );
    }

    let gpassBoring = <span></span>;
    if (username === 'gpass1' && !profile.photo) {
      gpassBoring = (
        <div><img src="/images/ANIMATION.gif" /></div>
      );
    }

    return (
      <div className="col-md-7 col-md-offset-1 main profile">
        <div className="profile-header">
          <Avatar photo={profile.photo}>
            {`${profile.first} ${profile.last}`}
          </Avatar>
          <AddEventControls />
        </div>
        {gpassBoring}
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
        {gpassFancy}
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
