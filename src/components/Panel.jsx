import React from 'react';

export default class Panel extends React.Component {
  render(){
    const { className } = this.props;
    return(
        <div className={className}>
         {this.props.children}
        </div>
    );
  }

}