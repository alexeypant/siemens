import { connect } from 'react-redux';
import Component from '../App';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      uiState: state.uiState,
      points: state.points,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;