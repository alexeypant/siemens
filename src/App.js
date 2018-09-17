import React, { Component } from 'react';
import { getAnimationClasses } from './utils/animation';
import './App.css';
import Panel from './components/Panel';
import ArrowButtonLeft from './containers/ArrowButtonLeft';
import ArrowButtonRight from './containers/ArrowButtonRight';
import Visual from './components/Visual';

class App extends Component {

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('points', JSON.stringify(nextProps.points));
    localStorage.setItem('uiState', JSON.stringify(nextProps.uiState));
  }

  render() {
    const { previous, next } = this.props.uiState;
    const animationClasses = getAnimationClasses(previous, next);

    return (
      <div>
        <div className="row">
          <Panel className={animationClasses['LeftPanel']}>
            <ArrowButtonLeft className={animationClasses['leftButton']} />  
          </Panel>
          <Panel className={animationClasses['CentralPanel']}>
            <Visual />
          </Panel>
          <Panel className={animationClasses['RightPanel']}>
            <ArrowButtonRight className={animationClasses['rightButton']} />
          </Panel>
        </div>
      </div>
    );
  }
}

export default App;
