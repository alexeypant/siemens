import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import _ from 'lodash';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const points = localStorage.getItem('points') ? JSON.parse(localStorage.getItem('points')) : {}
const uiState = localStorage.getItem('uiState') 
  ? JSON.parse(localStorage.getItem('uiState')) 
  : {
    previous: 'InitialState',
    next: 'InitialState',
  }

// shift uniqueId to the last id used previously
// I know, I know. it's temporary soluiton ))
// I suppose this can be solved using SQL... which should give unnique ID to every point
for(let i = 0; i < Object.keys(points).pop(); i++) {
  _.uniqueId();
}

const initialState = {
  points,
  uiState,
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

registerServiceWorker();
