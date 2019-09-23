import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Loading from '../../components/Loading';
import Input from '../../components/Input';

const styles = (theme) => ({
  layout: {
    width: '100%',
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
    padding: '0 10px',
    height: '100%',
    textAlign: 'center',
  },
  submit: {
    borderRadius: 8,
    fontWeight: 'bold',
    marginTop: theme.spacing.unit,
    color: theme.palette.primary.main,
    fontSize: '12px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  formControl: {
    marginTop: 20,
    margin: 0,
    marginBottom: 0,
    padding: 0,
    paddingLeft: 0,
    width: '100%',
  },
  group: {
    display: 'inline',
  },
  groupchild: {
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    width: '50%',
  },
  label: {
    fontSize: 16,
    marginLeft: 0,
    color: theme.palette.primary.text,
  },
  error: {
    color: theme.palette.error.main,
    marginTop: 10,
    textAlign: 'center',
  },
  gender: {
    textAlign: 'left',
  },
});

class Signupcontainer extends Component {
  state = {
    name: '',
    phoneEmail: '',
    password: '',
    gender: '',
    message: '',
    visibility: false,
    code: undefined,
  };

  componentDidMount = () => {
    window.addEventListener('keypress', this.onEnter);
    const { location } = this.props;
    const parsed = queryString.parse(location.search);
    const { code } = parsed;
    this.setState({ code });
  }

  componentWillUnmount = () => {
    window.removeEventListener('keypress', this.onEnter);
  }

  onEnter = (e) => {
    if (e.keyCode === 13) { this.onSubmit(); }
  }

  toggleVisibility = () => {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  onChange = (name) => (event) => {
    const { value } = event.target;

    if (name === 'password') {
      if (value.length < 8) {
        this.setState({ message: 'password length should be greater than 8' });
      } else {
        this.setState({ message: '' });
      }
    }

    this.setState({ [name]: value });
  };

  render() {
    const { classes, user } = this.props;
    const {
      name, phoneEmail, password, gender, visibility, message, code,
    } = this.state;
    const { isFetching, isError, error } = user;

    return (
      <main className={classes.layout}>
        <form className={classes.form}>
          <FormControl margin="dense" required fullWidth>
            <Input
              value={phoneEmail}
              label="Email or Phone"
              variant="outlined"
              onChange={this.onChange('phoneEmail')}
            />
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <Input
              value={name}
              label="Name"
              variant="outlined"
              onChange={this.onChange('name')}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Typography
              classes={{ root: classes.label }}
              className={classes.gender}
            >
              {'Gender *'}
            </Typography>
            <RadioGroup
              aria-label="Gender"
              name="gender"
              value={gender}
              onChange={this.onChange('gender')}
              className={classes.group}
            >
              <FormControlLabel
                value="MALE"
                control={<Radio />}
                label="MALE"
                className={classes.groupchild}
              />

              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="FEMALE"
                className={classes.groupchild}
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <Input
              type={visibility ? 'text' : 'password'}
              value={password}
              label="Password"
              variant="outlined"
              onChange={this.onChange('password')}
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
          <FormControl margin="dense" fullWidth>
            <Input
              type="text"
              value={code}
              variant="outlined"
              label="Invite code (Optional)"
              onChange={this.onChange('code')}
            />
          </FormControl>
          {isFetching && <Loading />}
          {
            isError && (
              <Typography variant="body2" classes={{ root: classes.error }}>
                {error}
              </Typography>
            )
          }
          <Typography variant="body2" classes={{ root: classes.error }}>
            {message}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={this.onSubmit}
          >
                Sign Up
          </Button>
        </form>
      </main>
    );
  }
}

Signupcontainer.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispachToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispachToProps,
)(withStyles(styles)(Signupcontainer)));
