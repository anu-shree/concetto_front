import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArrowUp from '@material-ui/icons/ArrowUpwardRounded';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    maxHeight: 40,
    minHeight: 40,
    maxWidth: 40,
    minWidth: 40,
    position: 'fixed',
    bottom: 10,
    right: 10,
    zIndex: 1000,
    '&:hover': {
      background: '#525188',
      color: '#ffffff',
    },
  },
});

class scrollTop extends Component {
  state = {
    intervalId: 0,
    scrollStep: 50,
  }

  scrollStep = () => {
    const { intervalId, scrollStep } = this.state;
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStep);
  }

  scrollToTop = () => {
    const intervalId = setInterval(this.scrollStep, 16);
    this.setState({ intervalId });
  }

  render() {
    const { classes } = this.props;

    return (
      <Button
        disableRipple
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={() => this.scrollToTop()}
      >
        <ArrowUp className={classes.arrow} />
      </Button>
    );
  }
}

scrollTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default scrollTop;
