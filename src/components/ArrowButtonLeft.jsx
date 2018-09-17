import React from 'react';
import { getNextUIState } from '../utils/animation';

export default class ArrowButtonLeft extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    const previous = this.props.uiState.next;
    const next = getNextUIState(previous, 'leftSideButton');
    this.props.updateUI({ previous, next });
  }

  render(){
    const { className } = this.props;
    return(
      <svg className={className} onClick={this.onClick} width="25" height="50" viewBox="0 0 25 50">
       <polygon points="00,25 25,00 25,50" fill="green" />
      </svg>
    );
  }
}