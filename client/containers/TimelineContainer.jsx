import { connect } from 'react-redux';
import Timeline from '../components/Timeline';

export const TimelineContainer = connect(
  state => ({ events: state.userEvents })
)(Timeline);

export default TimelineContainer;
