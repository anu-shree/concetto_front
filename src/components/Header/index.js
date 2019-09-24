import React, { Component } from "react"
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
    const showLogo = this.props.showLogo;
        return (
      <div className="container align-items-center">
        <nav role="navigation">
          {showLogo ? <img src="assets/logo.png" className="logo-home" alt={Loading} />:''}
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
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
      </div>
    );
  }
}

export default Header;
