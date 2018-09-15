import React, { Component } from 'react';
import { getAnimationClasses, getNextUIState } from './components/animation';
import './App.css';
import SidePanel from './components/SidePanel';
import ArrowButton from './components/ArrowButton';

class App extends Component {
  state = {
    uiState: {
      previous: 'InitialState',
      next: 'InitialState',
    }
  }

  onCloseLeftClick = (e) => {
   // e.preventDefault();
    const previous = this.state.uiState.next;
    const next = getNextUIState(previous, 'leftSideButton');
    this.setState({
      uiState: {
        previous,
        next,
      }
    });
  }

  onCloseRightClick = (e) => {
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

    return (
      <div>
        <ArrowButton handleClick={this.onCloseLeftClick} className={leftButtonClasses} />
        <ArrowButton handleClick={this.onCloseRightClick} className="buttonRight" />
        <div className="row">
          <div className={leftPanelClasses}></div>
          <div className={centralPanelClasses}></div>
          <SidePanel className={rightPanelClasses} />
        </div>
      </div>
    );
  }
}


export default App;
