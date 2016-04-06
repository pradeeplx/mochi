'use strict';

import React from 'react';
import Event from './Event';

export const Timeline = () => (
  <div className="col-md-4 main timeline">
    <Event title="Donated $500" date="March 19, 2016" category="donation">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
      tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi
      ornare id odio in pharetra.
    </Event>
    <Event title="Met for Coffee" date="March 8, 2016" category="meeting">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Event>
    <Event title="Donated $200" date="March 1, 2016" category="donation">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      id tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis.
      Morbi ornare id odio in pharetra.
    </Event>
    <Event title="Donated $10" date="January 7, 2012" category="donation" />
    <Event title="Attended Gala" date="July 24, 2011" category="event">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
      tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi
      ornare id odio in pharetra.
    </Event>
    <Event title="Donated $10" date="April 15, 2008" category="donation">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
      tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi
      ornare id odio in pharetra.
    </Event>
    <Event title="Email Campaign" date="November 5, 2007" category="correspondence">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
      tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi
      ornare id odio in pharetra.
    </Event>
    <Event title="Email Campaign" date="November 5, 2007" category="correspondence">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
      tincidunt sapien. Aliquam laoreet maximus diam vehicula lobortis. Morbi
      ornare id odio in pharetra.
    </Event>
  </div>);

export default Timeline;
