import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import Parallax from "../parallax";

const styles = theme => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  parallax: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moon: {
    display: "flex",
    zIndex: 200,
    height: "400px",
    bottom: 0,
    position: "fixed",
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 45,
      x: 0,
    };
  }
  componentDidMount() {
    this.setState({ x: window.scrollY });
    window.addEventListener("scroll", this.handleScroll);
    if(window.innerWidth> 600){
      window.addEventListener('scroll',this.handleScroll1);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll1);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > window.innerHeight / 10) {
      if (this.state.offset !== 55) {
        this.setState({
          offset: 55
        });
      }
    } else {
      this.setState({
        offset: 45 + (scrollTop / window.innerHeight) * 100
      });
      //   console.log(scrollTop + " " + window.innerHeight);
    }
  };

  handleScroll1 = event => {
    this.setState({x:window.scrollY});
  }

  render() {
    const { showLogo, classes } = this.props;
    const { offset,x } = this.state;
    return (
      <div>
        <div className={classes.logo}>
          {showLogo ? (
            ""
          ) : (
            <img src="./assets/logo.png" className="logo-home" alt={Loading} />
          )}
        </div>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <img
              src="./assets/moon_surface.png"
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
            <div className={classes.parallax}>
            <Parallax x={x} image1="assets/download1.jpg" image2="assets/download2.jpg" image3="assets/download3.jpg" />
            <Parallax x={x} image1="assets/logo.png" image2="assets/moon_surface.png" image3="assets/index.jpeg" />
            </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
