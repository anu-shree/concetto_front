import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    flex: '1 0 100%',
    padding: '1%',
  },
  progress: {},
};

const Error = { error: 'Something went wrong!! please try again..' };

const TimedOut = { message: 'Please try again..' };

const Loading = ({
  classes, error, timedOut, pastDelay,
}) => {
  if (error) {
    return (
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Error />
      </Grid>
    );
  }

  if (timedOut) {
    return (
      <Grid container justify="center" spacing={0} className={classes.root}>
        <TimedOut />
      </Grid>
    );
  }

  if (pastDelay) {
    return (
      <Grid container justify="center" spacing={0} className={classes.root}>
        <CircularProgress color="secondary" className={classes.progress} />
      </Grid>
    );
  }

  return (
    <Grid container justify="center" spacing={0} className={classes.root}>
      <CircularProgress color="secondary" className={classes.progress} />
    </Grid>
  );
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.any,
  timedOut: PropTypes.any,
  pastDelay: PropTypes.any,
};

export default withStyles(styles)(Loading);
