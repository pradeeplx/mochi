'use strict';

import React, { PropTypes } from 'react';

const DONATION_CATEGORY = 'donation';
const MEETING_CATEGORY = 'meeting';
const EVENT_CATEGORY = 'event';
const CORRESPONDENCE_CATEGORY = 'correspondence';

const getColor = (category) => {
  switch (category) {
    case DONATION_CATEGORY: return '#f61b7d';
    case EVENT_CATEGORY: return '#057bdf';
    case MEETING_CATEGORY: return '#5cc32d';
    case CORRESPONDENCE_CATEGORY: return '#f8d21b';
    default: return '#f61b7d';
  }
};

const getTitle = (title, category, amount) => {
  if (category === DONATION_CATEGORY) {
    return `${title} $${Number(amount).toLocaleString()}`;
  }
  return title;
};

export const Event = ({ title, category, date, amount, children }) =>
  <div className="timeline-event">
    <div className="event-title">
      <svg className="event-circle" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill={getColor(category)} />
      </svg>
      <h4>{getTitle(title, category, amount)}</h4>
    </div>
    <div className="event-details">
      <h5>{(new Date(date)).toDateString()}</h5>
      <p>{children}</p>
    </div>
  </div>;

Event.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number,
  children: PropTypes.string,
};

export default Event;
