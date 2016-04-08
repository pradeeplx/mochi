import React, { PropTypes } from 'react';
import StatItem from './StatItem';

export const SummaryStats = ({ sinceYear, lastDate, lastAmount, totalAmount }) =>
  <section className="summary-stats profile-card row">
    <StatItem size="3" header="Donor Since:" detail={sinceYear} />
    <StatItem size="3" header="Last Interaction:" detail={lastDate} />
    <StatItem size="3" header="Last Donation:" detail={`$${lastAmount}`} />
    <StatItem size="3" header="Giving Total:" detail={`$${totalAmount}`} />
  </section>;

SummaryStats.propTypes = {
  sinceYear: PropTypes.number,
  lastDate: PropTypes.string,
  lastAmount: PropTypes.number,
  totalAmount: PropTypes.number,
};

export default SummaryStats;
