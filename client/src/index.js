import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import App from './App';
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

