import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit,
  },
  oauth: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  border: {
    width: '100%',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
});


class OAuth extends Component {
  render() {
    const { classes, value } = this.props;

    return (
      <div className={classes.border}>
        {
        value === 1
          ? (
            <Typography variant="button" gutterBottom>
              Or sign in with
            </Typography>
          )
          : (
            <Typography variant="button" gutterBottom>
            Or sign up with
            </Typography>
          )
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispachToProps = (dispatch) => bindActionCreators({}, dispatch);

OAuth.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(withStyles(styles)(OAuth));
