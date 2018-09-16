import React, { Component } from 'react';
import { getAnimationClasses, getNextUIState } from './components/animation';
import './App.css';
import Panel from './components/Panel';
import ArrowButtonLeft from './components/ArrowButtonLeft';
import ArrowButtonRight from './components/ArrowButtonRight';
import Visual from './components/Visual';


class App extends Component {
  state = {
    uiState: {
      previous: 'InitialState',
      next: 'InitialState',
    }
  }

  onCloseLeftClick = () => {
    const previous = this.state.uiState.next;
    const next = getNextUIState(previous, 'leftSideButton');
    this.setState({
      uiState: {
        previous,
        next,
      }
    });
  }

  onCloseRightClick = () => {
    const previous = this.state.uiState.next;
    const next = getNextUIState(previous, 'rightSideButton');
    this.setState({
      uiState: {
        previous,
        next,
      }
    });
  }

  render() {
    const { previous, next } = this.state.uiState;
    const leftPanelClasses = getAnimationClasses(previous, next, 'LeftPanel');
    const rightPanelClasses = getAnimationClasses(previous, next, 'RightPanel');
    const centralPanelClasses = getAnimationClasses(previous, next, 'CentralPanel');
    const leftButtonClasses = getAnimationClasses(previous, next, 'leftButton');
    const rightButtonClasses = getAnimationClasses(previous, next, 'rightButton');

    return (
      <div>
        <div className="row">
          <Panel className={leftPanelClasses}>
            <ArrowButtonLeft handleClick={this.onCloseLeftClick} className={leftButtonClasses} />  
          </Panel>
          <Panel className={centralPanelClasses}>
            <Visual />
          </Panel>
          <Panel className={rightPanelClasses}>
            <ArrowButtonRight handleClick={this.onCloseRightClick} className={rightButtonClasses} />
          </Panel>
        </div>
      </div>
    );
  }
}


export default App;
