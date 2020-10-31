import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios" ; 

export default class Header extends Component {

  render() {

    return (

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom:40}}>
  <a class="navbar-brand" href="/">Online Test Application</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/" style={{ fontSize: 20 }}>Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/quiz" style={{ fontSize: 20 }}>Quizzes</a>
      </li>
      </ul>
      </div>
      </nav>


      // <nav className="navbar navbar-expand-md navbar-inverse bg-dark display-5" style={{marginBottom:40}}>
      //   <div className="container-fluid">
      //     <ul className="nav navbar-nav">
      //       <li className="nav-item" style={{ fontSize: 20, color:"white" }}>
      //         <Link to="/">Online Quiz App</Link>
      //       </li>

      //       <li className="nav-item" style={{ fontSize: 20 }}>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li className="nav-item" style={{ fontSize: 20 }}>
      //         <Link to="/quiz">Quizzes</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}