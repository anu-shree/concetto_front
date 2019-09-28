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
    alignItems: "center"
  },
  logoImg: {
    transition: "all 3s ease",
    position: "fixed",
    transform: "translate(-50 %, -50 %)"
  },
  moon: {
    display: "flex",
    zIndex: 200,
    height: "400px",
    bottom: 0,
    position: "fixed"
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 45,
      header: false
    };
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    const { offset, header } = this.state;
    if (scrollTop > window.innerHeight / 10) {
      if (!header) {
        this.setState({
          header: true
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      if (offset !== 55) {
        this.setState({
          offset: 55
        });
      }
    } else {
      if (header) {
        this.setState({
          header: false
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      this.setState({
        offset: 45 + (scrollTop / window.innerHeight) * 100
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { offset } = this.state;
    return (
      <div>
        <div className={classes.logo}>
          <img
            src="./assets/logo.png"
            className={`logo logo-home`}
            ref={this.homeRef}
            alt={Loading}
          />
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
            <Parallax
              image1="assets/download1.jpg"
              image2="assets/download2.jpg"
              image3="assets/download3.jpg"
            />
            <img
              src="./assets/moon_surface.png"
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
