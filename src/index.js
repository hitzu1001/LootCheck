import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';//index file will be the default to a directory, ie. /reducers = /reducers/index
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
