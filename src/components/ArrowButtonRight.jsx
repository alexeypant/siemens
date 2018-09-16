import React from 'react';

export default class ArrowButtonRight extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    this.props.handleClick();
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