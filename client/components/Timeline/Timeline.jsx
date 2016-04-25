'use strict';

import React, { PropTypes } from 'react';
import Event from './Event';

export const Timeline = ({ events }) => {
  const eventElems = events.map((event, i) =>
    <Event
      key={i}
      title={event.title}
      category={event.category}
      date={event.date}
      amount={event.amount}
    >
      {event.description}
    </Event>
  );

  return (
    <div className="col-md-4 main timeline">
      {eventElems}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

export default Timeline;
