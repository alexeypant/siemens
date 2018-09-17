import { connect } from 'react-redux';
import Component from '../components/ArrowButtonRight';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      uiState: state.uiState,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;