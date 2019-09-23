import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import Loading from '../../../components/Loading';
import Signin from '../Signin';
import Signup from '../Signup';
import '../style.css';

const AsyncOTPverification = Loadable({
  loader: () => import('../OTPverification'),
  modules: ['../OTPverification'],
  loading: Loading,
});

const styles = (theme) => ({
  layout: {
    width: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '50px',
    paddingBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      display: 'block',
    },
  },
  buttonghost: {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    borderRadius: '20px',
    border: '1px solid #ff4b2b',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
  },
});

class DesktopView extends Component {
  componentDidMount = () => {
    const { history } = this.props;
    if (history.location.pathname === '/auth/signup') {
      const container = document.getElementById('container');
      container.classList.add('right-panel-active');
    }
  }

  componentDidUpdate = (prevProps) => {
    const { history, location } = this.props;

    if (location !== prevProps.location) {
      if (history.location.pathname === '/auth/signin') {
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
        container.classList.add('left-panel-active');
      }

      if (history.location.pathname === '/auth/signup') {
        const container = document.getElementById('container');
        container.classList.remove('left-panel-active');
        container.classList.add('right-panel-active');
      }
    }
  }

  signupButton = () => {
    const { history, location } = this.props;
    const { search } = location;
    let url = '/auth/signup';
    if (search !== '') {
      url = `/auth/signup${search}`;
    }
    history.push(url);
  }

  signinButton = () => {
    const { history, location } = this.props;
    const { search } = location;
    let url = '/auth/signin';
    if (search !== '') {
      url = `/auth/signin${search}`;
    }
    history.push(url);
  }

  render() {
    const { classes, history } = this.props;

    return (
      <div className={classes.layout}>
        <Switch>
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <Route
                path="/auth/signup"
                component={(restProps) => (
                  <Signup {...restProps} />
                )}
              />
            </div>
            <div className="form-container sign-in-container">
              <Route
                path="/auth/signin"
                component={(restProps) => (
                  <Signin {...restProps} history={history} />
                )}
              />
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Already Signed Up?</h1>
                  <p> To keep connected, please Sign In with your personal info</p>
                  <button
                    className={classes.buttonghost}
                    id="signIn"
                    onClick={this.signinButton}
                  >
                    {'Sign In'}
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>New User?</h1>
                  <p>Enter your details and start journey with us</p>
                  <button
                    className={classes.buttonghost}
                    id="signUp"
                    onClick={this.signupButton}
                  >
                    {'Sign Up'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Route
            exact
            path="/auth/signup/verify-otp"
            component={(restProps) => (
              <AsyncOTPverification
                {...restProps}
                history={history}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

DesktopView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DesktopView);
