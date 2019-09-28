import React, { Component } from "react";
import Loading from "../Loading";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";

class EventDetail extends Component {
  constructor(props){
    super(props);
      this.aboutShow=this.aboutShow.bind(this);
      this.rulesShow = this.rulesShow.bind(this);
      this.detailsShow = this.detailsShow.bind(this);
      this.registerShow = this.registerShow.bind(this);
  }
state={
  active:'about',
};

  aboutShow = (active) => {
  this.setState({
    active: 'about',
  })
}
  rulesShow = (active) => {
      this.setState({
        active: 'rules',
      })
}
  detailsShow = (active) => {
      this.setState({
        active: 'details',
      })
}
  registerShow = (active) => {
      this.setState({
        active: 'register',
      })
}
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const event = {
      id: 1,
      name: "Event 1",
      is_team: 0,
      max_participants: 3,
      dept: "Computer Science and Engineering",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      club: "",
      rules:
        "1. Only 3 participants are allowed \n 2. No participation fee \n 3. No cheating",
      prizes: "4000,2000,1000",
      scores: false,
      img: "",
      fee: 0,
      start: "2019-10-20T09:30:00.890Z",
      end: "2019-10-20T12:30:00.890Z"
    };
    return (
      <div style={{ display: "flex", margin: "2px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            backgroundColor: "rgba(97, 97, 97, 0.4)",
            minHeight: "100vh"
          }}
        >
          <div>
            <img src="assets/logo.png" className="img-fluid" alt={Loading} />
          </div>
          <div className="btnFlex">
            <button className={"btn btn-2 "+((this.state.active==='about')?'active-bottom':'')} onClick={this.aboutShow}>ABOUT</button>
            <button className={"btn btn-2 "+((this.state.active==='rules')?'active-bottom':'')} onClick={this.rulesShow}>RULES</button>
            <button className={"btn btn-2 "+((this.state.active==='details')?'active-bottom':'')} onClick={this.detailsShow}>DETAILS</button>
            <button className={"btn btn-2 "+((this.state.active==='register')?'active-bottom':'')} onClick={this.registerShow}>REGISTER</button>
          </div>
        </div>
        <div>
          <ul className="slides">
            <input type="radio" name="radio-btn" id="img-1" checked />
            <li className="slide-container">
              <div className="slide">
                <img
                  src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg"
                  alt={event.name}
                />
              </div>
              <div className="nav">
                <label for="img-6" className="prev">
                  &#x2039;
                </label>
                <label for="img-2" className="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-2" />
            <li className="slide-container">
              <div className="slide">
                <img
                  src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                  alt={event.name}
                />
              </div>
              <div className="nav">
                <label for="img-1" className="prev">
                  &#x2039;
                </label>
                <label for="img-3" className="next">
                  &#x203a;
                </label>
              </div>
            </li>
            <li className="nav-dots">
              <label for="img-1" className="nav-dot" id="img-dot-1"></label>
              <label for="img-2" className="nav-dot" id="img-dot-2"></label>
            </li>
          </ul>
          <div>
            {event.name}
          </div>
          {this.state.active === 'about' && <About />}
          {this.state.active === 'rules' && <Rules />}
          {this.state.active === 'details' && <Details />}
          {this.state.active==='register' && <Register/>}
        </div>
      </div>
    );
  }
}

export default EventDetail;
