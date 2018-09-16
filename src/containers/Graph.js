import { connect } from 'react-redux';
import Component from '../components/Graph';
import * as actionCreators from '../actions';
import { pointsSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      points: pointsSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;