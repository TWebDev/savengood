import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

import './resources/css/index.css';
import './resources/fonts/LoveloBlack/font.css';
import './resources/fonts/LoveloLine/font.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import '../node_modules/@fortawesome/fontawesome-free/css/regular.css';
import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';

ReactDOM.render(
  <Provider
    store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root'));
