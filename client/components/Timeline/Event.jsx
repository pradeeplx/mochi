'use strict';

import React, { PropTypes } from 'react';

// ADD CATEGORY PROPS
export const Event = ({ title, date, children }) => (
  <div className="timeline-event">
    <div className="event-title">
      <svg className="event-circle" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#f61b7d" />
      </svg>
      <h4>{title}</h4>
    </div>
    <div className="event-details">
      <h5>{date}</h5>
      <p>{children}</p>
    </div>
  </div>
);

Event.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.string,
};

export default Event;
