import React, { Component } from 'react';
import { getAnimationClasses } from './components/animation';
import './App.css';
import Panel from './components/Panel';
import ArrowButtonLeft from './containers/ArrowButtonLeft';
import ArrowButtonRight from './containers/ArrowButtonRight';
import Visual from './components/Visual';


class App extends Component {

  render() {
    const { previous, next } = this.props.uiState;
    const leftPanelClasses = getAnimationClasses(previous, next, 'LeftPanel');
    const rightPanelClasses = getAnimationClasses(previous, next, 'RightPanel');
    const centralPanelClasses = getAnimationClasses(previous, next, 'CentralPanel');
    const leftButtonClasses = getAnimationClasses(previous, next, 'leftButton');
    const rightButtonClasses = getAnimationClasses(previous, next, 'rightButton');

    return (
      <div>
        <div className="row">
          <Panel className={leftPanelClasses}>
            <ArrowButtonLeft className={leftButtonClasses} />  
          </Panel>
          <Panel className={centralPanelClasses}>
            <Visual />
          </Panel>
          <Panel className={rightPanelClasses}>
            <ArrowButtonRight className={rightButtonClasses} />
          </Panel>
        </div>
      </div>
    );
  }
}


export default App;
