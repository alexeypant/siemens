import React from 'react';
import { getNextUIState } from './animation';

export default class ArrowButtonRight extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    const previous = this.props.uiState.next;
    const next = getNextUIState(previous, 'rightSideButton');
    this.props.updateUI({ previous, next });
  }

  render(){
    const { className } = this.props;
    return(
      <svg className={className} onClick={this.onClick} width="25" height="50" viewBox="0 0 25 50">
       <polygon points="00,00 00,50 25,25" fill="green" />
      </svg>
    );
  }
}