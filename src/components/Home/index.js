import React, { Component } from "react";
import Loading from "../Loading";

class Home extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const showLogo = this.props.showLogo;
    return (
      <div className="container mt-4 home text-center align-self-center">
        {showLogo?'':<img src="assets/logo.png" className="logo-home" alt={Loading}/>}
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
        <br/>
        <br />
        <br />
        <br/>
        <br />
        <br />
        <br />
        <br/>
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
        <br/>
        <br/>
      </div>
    );
  }
}

export default Home;
