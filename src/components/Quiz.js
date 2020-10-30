import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import img1 from "../images/american-football.png"
import img2 from "../images/landmark.png"
import img3 from "../images/coding.png"



export default class Quiz extends Component {
    render() {
        return (
            <div className="container" style = {{marginTop:50}}>

<div class="row">
  <div class="col-sm-4">
  <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={img1} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Sports</h5>
    <p class="card-text">Test you knowledge in the world of sports. With questions ranging From cricket to tennis to sumo wrestling, this is the ultimate test of your knowledge</p>
    <a href="quiz/sports" class="btn btn-primary">Take the sports quiz</a>
  </div>
</div>
  </div>
  <div class="col-sm-4">
  <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={img2} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Japan</h5>
    <p class="card-text">A country with such a rich history and a unique geography. Take a quiz to test your knowledge about this unique country now.</p>
    <a href="quiz/japan" class="btn btn-primary">Take the Japan quiz</a>
  </div>
</div>
  </div>
  <div class="col-sm-4">
  <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={img3} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Programming</h5>
    <p class="card-text">Surely the knowledge of the future. With AI and ML around the corner of a major shift in the way the world works, dont lag behind and test your Programming knowledge now!</p>
    <a href="/quiz/programming" class="btn btn-primary">Take the Programming quiz</a>
  </div>
</div>
  </div>
</div>
            </div>
        )
    }
}
