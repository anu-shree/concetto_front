import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Loading from '../../../components/Loading';
import Signin from '../Signin';
import Signup from '../Signup';

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
    paddingTop: '0px',
    paddingBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      display: 'block',
    },
  },
  appbar: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      bottom: 0,
    },
  },
  tabsRoot: {
    border: `1px solid ${theme.palette.primary.border}`,
  },
  tabsIndicator: {
    // backgroundColor: theme.palette.primary.dark,
  },
  tabRoot: {
    minWidth: 72,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      opacity: 1,
    },
  },
});

class MobileView extends Component {
  state = {
    value: 0,
  }

  componentWillMount() {
    const { history } = this.props;
    if (history.location.pathname === '/auth/signup') {
      this.setState({ value: 1 });
    }
  }

  handleChange = (event, value) => {
    const { history } = this.props;
    this.setState({ value });

    switch (value) {
      case 0:
        history.push('/auth/signin');
        break;
      case 1:
        history.push('/auth/signup');
        break;
      default:
        history.push('/auth/signin');
        break;
    }
  }

  render() {
    const { classes, history } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.layout}>
        <Switch>
          <div className="container" id="container">
            <div className={classes.appbar}>
              <Tabs
                fullWidth
                value={value}
                classes={{
                  root: classes.tabsRoot,
                  indicator: classes.tabsIndicator,
                }}
                onChange={this.handleChange}
              >
                <Tab
                  label="Sign-in"
                  value={0}
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                />
                <Tab
                  label="Sign up"
                  value={1}
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                />
              </Tabs>
            </div>
            <div className={classes.signupform}>
              <Route
                path="/auth/signup"
                component={(restProps) => (
                  <Signup {...restProps} />
                )}
              />
            </div>
            <div className={classes.signinform}>
              <Route
                path="/auth/signin"
                component={(restProps) => (
                  <Signin {...restProps} history={history} />
                )}
              />
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

MobileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileView);
