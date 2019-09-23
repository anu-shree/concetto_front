import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Loading from '../../components/Loading';

const styles = (theme) => ({
  error: {
    color: theme.palette.error.main,
    textAlign: 'center',
  },
  dialog: {
    margin: 10,
  },
  content: {
    marginBottom: 10,
  },
});

class ForgotPasswordDialog extends Component {
  state = {
    phoneOREmail: '',
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ phoneOREmail: value });
  }

  render() {
    const {
      open, handleClose, classes, user,
    } = this.props;
    const { isFetching, isError, error } = user;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText classes={{ root: classes.content }}>
            {'Enter your Phone or Email to recieve the OTP :'}
          </DialogContentText>
          <FormControl required fullWidth>
          </FormControl>
          { isFetching && <Loading /> }
          {
            isError && (
              <Typography variant="overline" classes={{ root: classes.error }}>
                {error}
              </Typography>
            )
          }
        </DialogContent>
        <DialogActions>
          <Button
            color="accent"
            variant="outlined"
            onClick={handleClose}
          >
            {'Cancel'}
          </Button>
          <Button
            color="secondary"
            variant="contained"
          >
            {'Send OTP'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ForgotPasswordDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(ForgotPasswordDialog);
