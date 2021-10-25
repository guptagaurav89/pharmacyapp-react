import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import reportWebVitals from './reportWebVitals';
import {store} from './store'
import { Router } from "react-router";
import { createBrowserHistory } from "history";

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
