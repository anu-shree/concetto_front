import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import DesktopView from './View/Desktop';
import MobileView from './View/Mobile';

const styles = (theme) => ({
  layout: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      display: 'block',
    },
  },
});

class Auth extends Component {
  render() {
    const {
      classes, history, location, screen,
    } = this.props;

    return (
      <div className={classes.layout}>
        {
          (screen.width <= 700) ? (
            <MobileView
              history={history}
              location={location}
            />
          ) : (
            <DesktopView
              history={history}
              location={location}
            />
          )
        }
      </div>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  screen: PropTypes.object.isRequired,
};

export default connect(withStyles(styles)(Auth));
