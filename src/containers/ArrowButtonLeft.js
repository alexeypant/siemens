import { connect } from 'react-redux';
import Component from '../components/ArrowButtonLeft';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      points: state.uiState,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;