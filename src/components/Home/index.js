import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  logo:{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moon:{
    display: 'flex',
    zIndex: 200,
    height: '400px',
    bottom: 0,
    border: '6px solid #ffffff',
  },
});
class Home extends Component {
  render() {
    const { showLogo,classes } = this.props;
    return (
      <div>
        <div className={classes.logo}>
          {showLogo ? (
            ""
          ) : (
            <img src="assets/logo.png" className="logo-home" alt={Loading} />
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
