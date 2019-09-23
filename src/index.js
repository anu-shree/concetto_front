import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRoutes from './AppRoutes';
import './index.css';
import * as serviceWorker from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
    </React.Fragment>,
    document.getElementById('root'),
  );
};

render(AppRoutes);

if (module.hot) {
  module.hot.accept('./AppRoutes', () => {
    const App = require('./AppRoutes').default; // eslint-disable-line
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
