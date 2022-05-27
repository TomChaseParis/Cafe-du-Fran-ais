import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>,
    </Router>
  </React.StrictMode>
);
