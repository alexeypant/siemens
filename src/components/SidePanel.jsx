import React from 'react';

export default class SidePanel extends React.Component {
  render(){
    const { className } = this.props;
    return(
        <div className={className}>
        </div>
    );
  }

}