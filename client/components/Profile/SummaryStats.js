'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import StatItem from './StatItem';

export const SummaryStats = () =>
  <section className="summary-stats profile-card row">
    <StatItem size="3" header="Donor Since:" detail="2007" />
    <StatItem size="3" header="Last Interaction:" detail="March 19, 2016" />
    <StatItem size="3" header="Last Donation:" detail="$500" />
    <StatItem size="3" header="YTD Total:" detail="$700" />
  </section>;

export default SummaryStats;
