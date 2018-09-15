import React from 'react';


export default class Panel extends React.Component {

  render(){
    const { className, children } = this.props;
    return(
        <div className={className}>
          <div>
            {children}
          </div>
        </div>
    );
  }
}