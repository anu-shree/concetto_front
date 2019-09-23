import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Loading from '../../components/Loading';
import Input from '../../components/Input';
import ForgotPasswordDialog from './ForgotPasswordDialog';

const styles = (theme) => ({
  layout: {
    width: '200%',
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 15px',
    height: '100%',
    textAlign: 'center',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 8,
    fontSize: '12px',
  },
  text: {
    color: 'red',
  },
  error: {
    color: theme.palette.error.main,
    marginTop: 10,
    textAlign: 'center',
  },
  forgot: {
    width: '100%',
    marginTop: 20,
  },
});

class Signin extends Component {
  state = {
    email: '',
    phone: '',
    password: '',
    open: false,
    visibility: false,
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.onEnter);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onEnter);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  toggleVisibility = () => {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  onEnter = (e) => {
    if (e.keyCode === 13) { this.onSubmit(e); }
  }

  onChangeEmail = (e) => {
    const { value } = e.target;
    this.setState({ email: value, phone: value });
  }

  onChangePasswd = (e) => {
    const { value } = e.target;
    this.setState({ password: value });
  }

  onEnterPhone = (e) => {
    const { value } = e.target;
    this.setState({ phone: value });
  }

  render() {
    const {
      classes, user, history, actionRequestOTPStart,
      actionRequestOTPSuccess, actionRequestOTPFailure,
    } = this.props;
    const {
      email, phone, password, open, visibility,
    } = this.state;
    const { isFetching, isError, error } = user;

    return (
      <main className={classes.layout}>
        <form className={classes.form}>
          <FormControl margin="dense" required fullWidth>
            <Input
              value={email || phone}
              variant="outlined"
              label="Email or Phone"
              onChange={(e) => this.onChangeEmail(e)}
            />
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <Input
              type={visibility ? 'text' : 'password'}
              value={password}
              variant="outlined"
              label="Password"
              onChange={(e) => this.onChangePasswd(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.toggleVisibility}
                    >
                      {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          {
              isError
                ? (
                  <Typography variant="body2" classes={{ root: classes.error }}>
                    {error}
                  </Typography>
                ) : null
            }
          {isFetching ? <Loading /> : null}
          <Button
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={this.onSubmit}
          >
              Sign in
          </Button>
          <FormControl className={classes.forgot}>
            <Button
              size="small"
              color="secondary"
              onClick={this.handleClickOpen}
            >
              {'Forgot Password ?'}
            </Button>
            <ForgotPasswordDialog
              open={open}
              history={history}
              user={user}
              handleClose={this.handleClose}
              actionRequestOTPStart={actionRequestOTPStart}
              actionRequestOTPSuccess={actionRequestOTPSuccess}
              actionRequestOTPFailure={actionRequestOTPFailure}
            />
          </FormControl>
        </form>
      </main>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  actionSigninStart: PropTypes.func.isRequired,
  actionSigninSuccess: PropTypes.func.isRequired,
  actionSigninFailure: PropTypes.func.isRequired,
  actionRequestOTPStart: PropTypes.func.isRequired,
  actionRequestOTPSuccess: PropTypes.func.isRequired,
  actionRequestOTPFailure: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(Signin));
