import React from 'react';

export default class ArrowButton extends React.Component {


  onClick = (e) => {
    e.preventDefault();
    this.props.handleClick();
  }
  render(){
    const { className } = this.props;
    return(
        <svg className={className} onClick={this.onClick} xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
            <path d="M14 7l-5 5 5 5V7z"/>
            <path fill="none" d="M24 0v24H0V0h24z"/>
        </svg>
    );
  }

}