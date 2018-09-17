import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const initialState = {
  uiState: {
    previous: 'InitialState',
    next: 'InitialState',
  },
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
