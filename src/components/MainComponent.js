import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import EventDetail from "./EventDetail";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, getEvent } from "../redux/Actions/Events";
import { loginUser, logoutUser, registerUser } from "../redux/Actions/Auth";
import { fetchUsers, editUser, editPassword } from "../redux/Actions/Users";

const mapStateToProps = state => {
  return {
    events: state.events,
    auth: state.auth,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
  getEvent: name => dispatch(getEvent(name)),
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
  loginUser: creds => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  registerUser: creds => dispatch(registerUser(creds)),
  editUser: (email, name, phone, college) =>
    dispatch(editUser(email, name, phone, college)),
  editPassword: (email, password) => dispatch(editPassword(email, password))
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogo: false,
      preloader: true,
      delayed: false
    };
  }
  componentDidMount() {
    this.props.fetchEvents();
    if (
      this.props.auth.isAuthenticated &&
      this.props.auth.userinfo &&
      this.props.auth.userinfo.admin
    ) {
      this.props.fetchUsers();
    }
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ preloader: false });
    setTimeout(() => {
      this.setState({ delayed: true });
    }, 4000);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > window.innerHeight / 4) {
      if (!this.state.showLogo) {
        this.setState({
          showLogo: true
        });
      }
    } else {
      if (this.state.showLogo)
        this.setState({
          showLogo: false
        });
      console.log(scrollTop + " " + window.innerHeight);
    }
  };

  render() {
    const { preloader } = this.props;
    const { delayed } = this.state;
    // if (preloader && !delayed) {
    //   return <div>Loading .........</div>;
    // }
    const PrivateRouteCommon = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth.isAuthenticated && this.props.auth.userinfo.admin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    const PrivateRouteStudent = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth.isAuthenticated && !this.props.auth.userinfo.admin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    return (
      <div className="App">
        <Header
          showLogo={this.state.showLogo}
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          registerUser={this.props.registerUser}
        />
        <Switch location={this.props.location}>
          <Route
            exact
            path="/home"
            component={() => <Home showLogo={this.state.showLogo} />}
          />
          <Route
            exact
            path="/events"
            component={() => (
              <EventDetail events={this.props.events} auth={this.props.auth} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
