import React, { Component } from "react";
import Loading from "../Loading";
import Card from '@material-ui/core/Card';

class EventDetail extends Component {
  render() {
    const events =
      {
        id: 1,
        name: "Event 1",
        is_team: 0,
        max_participants: 3,
        dept: "Computer Science and Engineering",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        club: "",
        rules: "1. Only 3 participants are allowed \n 2. No participation fee \n 3. No cheating",
        prizes: "4000,2000,1000",
        scores: false,
        img: "",
        fee: 0,
        start: "2019-10-20T09:30:00.890Z",
        end: "2019-10-20T12:30:00.890Z"
      };
    return (
      <div className="heading black" style={{display: 'flex'}}>
        <div style={{ width: '25%', backgroundColor: 'rgba(97, 97, 97, 0.4)', height: '100%'}}>
          <img
            src="assets/logo.png"
            className="img-fluid"
            alt={Loading}
          />
          <div className="btnFlex">
            <button className="btn btn-2"><i class="fa fa-arrow-left fa-lg"></i></button>
            <button className="btn btn-2">RULES</button>
            <button className="btn btn-2">ABOUT</button>
            <button className="btn btn-2">HOME</button>
            <button className="btn btn-2">HOME</button>
          </div>
        </div>
      <div>
        <img
          src= "https://storage.googleapis.com/ehimages/2018/3/17/img_c537c2ec2a3cc2a42a266f9f8fb19c9a_1521305031309_original.jpg"
          alt={Loading}
          className="img-fluid"
         />
      </div>
    </div>
    );
  }
}

export default EventDetail;
