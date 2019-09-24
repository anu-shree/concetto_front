import React, { Component } from "react";
import Loading from "../Loading";
// import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const showLogo = this.props.showLogo;
    return (<div className="align-items-center">
      {showLogo ? <img src="assets/logo.png" className="logo-home" alt={Loading} />:''}
    </div>);
  }
}
export default Header;
