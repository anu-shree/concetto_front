import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { AppContainer, hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// import store
import theme from './colors/index';

import Loading from './components/Loading';
import ScrollRestoration from './components/ScrollRestoration';
import AppLayout from './containers/AppLayout/index';
// import ProtectedRoutes from './ProtectedRoutes';

const AsyncEvents = Loadable({
  loader: () => import('./containers/Events'),
  modules: ['./containers/Events'],
  loading: Loading,
});

const AsyncLogin = Loadable({
  loader: () => import('./containers/Auth'),
  modules: ['./containers/Auth'],
  loading: Loading,
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true; //eslint-disable-line

class AppRoutes extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Provider> {/** store={store} */}
            <BrowserRouter>
              <AppLayout>
                <ScrollRestoration />
                <Switch>
                  <Route exact path="/events" component={AsyncEvents} />
                  <Route path="/auth" component={AsyncLogin} />
                </Switch>
              </AppLayout>
            </BrowserRouter>
          </Provider>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(AppRoutes);
