import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flex: {
    flex: '1 0 auto',
  },
  input: {
    width: '100%',
  },
};

class OTPverification extends React.Component {
  state = {
    otp: '',
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const { otp } = this.state;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="OTP verification"
          />
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              An OTP is send to your mobile/email. Please verify it....
            </Typography>
            <TextField
              type="number"
              id="otp-verification"
              label="Enter your OTP"
              value={otp}
              margin="normal"
              className={classes.input}
              onChange={this.handleChange('otp')}
            />
          </CardContent>
          <CardActions>
            <div className={classes.flex} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.verifyOTP}
            >
              {'Verify'}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

OTPverification.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(OTPverification));
