import React, { Component } from "react";
import Loading from "../Loading";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }
  render() {
    const { showLogo } = this.props;
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="home">
            <span class="helper"></span>
            {showLogo ? (
              <img
                src="./assets/logo.png"
                className="logo-header"
                alt={Loading}
              />
            ) : (
              ""
            )}
          </a>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <br />
              <br />
              <br />
              <li>
                <NavLink className="nav-link" to="/home">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/events">
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/auth">
                  LOGIN
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/home">
                  CAP
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/home">
                  OUR TEAM
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav role="navigation"></nav>
      </div>
    );
  }
}

export default Header;
