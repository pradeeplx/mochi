import { createSelector } from 'reselect';

const getUserEvents = (state) => state.userEvents;

export const getDonorOriginYear = createSelector(
  [getUserEvents],
  (userEvents) => {
    let result;
    if (userEvents && userEvents.length) {
      result = new Date(userEvents[0].date);
    } else {
      result = new Date();
    }

    if (result && result.getFullYear) {
      return result.getFullYear();
    } else if (result && result.getYear) {
      return result.getYear();
    }
    return 0;
  }
);

export const getDonorLastDate = createSelector(
  [getUserEvents],
  (userEvents) => {
    let result;
    if (userEvents && userEvents.length) {
      const lastIndex = userEvents.length - 1;
      result = new Date(userEvents[lastIndex].date);
    } else {
      result = new Date();
    }
    return result.toLocaleDateString('en-US');
  }
);

const DONATION_CATEGORY = 'donation';

const getDonorDonations = createSelector(
  [getUserEvents],
  (userEvents) =>
    userEvents.filter(event => event.category === DONATION_CATEGORY)
);

export const getDonorLastDonation = createSelector(
  [getDonorDonations],
  (donations) => {
    if (donations && donations.length) {
      const lastIndex = donations.length - 1;
      return Number.parseFloat(donations[lastIndex].amount);
    }
    return 0.0;
  }
);

// TODO: do YTD total, not absolute total
export const getDonorDonationTotal = createSelector(
  [getDonorDonations],
  (donations) => {
    if (donations && donations.length) {
      return donations.reduce((total, donation) => {
        const amount = Number.parseFloat(donation.amount);
        return total + amount;
      }, 0.0);
    }
    return 0.0;
  }
);
