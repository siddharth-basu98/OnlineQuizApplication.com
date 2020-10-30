import Axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios'

export default class ShowResults extends Component {


    constructor(props) {
        super(props);
        this.state = {
          quiz_data : [],
          score: 0
        };
    }


    compute_score = (answers) => {
        let count = 0 ; 
        let ans = answers; 
        let data ; 


        for(data of ans){

            if(data.answer===data.your_answer){
                count++ ; 
            }
        }

        return count; 
    }


    componentDidMount(){
        console.log("showing props") ; 
        console.log(this.props.data) ; 

        let x = this.compute_score(this.props.data) ; 

        this.setState({
            quiz_data:this.props.data,
            score:x
        })
        
    }

    
    render() {

        console.log(this.state.quiz_data) ; 
        console.log(this.state.score) ; 

        return (
            <div style={{marginBottom:40}}>
            <h1 className="display-3">Review and Assessment</h1>
            <br />

        <h1 className="display-4">You scored {this.state.score}/{this.state.quiz_data.length}</h1>
        <p>Here is the review of your answers. <b>The answers you attempted and got wrong are marked in red</b> and the <b>correct option in green.</b></p>
        <br />


                {
                    this.state.quiz_data.map((listValue, index) => {
                        return(

                            <div className="container">
                            <div class="card">
                        <h5 class="card-header">Question {index+1} {(listValue.your_answer !== listValue.answer) ? (" - (Wrong)") : (" - (Correct)")}</h5>
                            <div class="card-body">
                            <h5 class="card-title">{listValue.question}</h5>

                            <button style={{marginRight:"5%", width:"40%"}} className={(listValue.your_answer === "1" &&  listValue.your_answer !== listValue.answer) ? "btn btn-danger" : (listValue.answer === "1" ? "btn btn-success": "")} onClick={() => {this.handleChange(index, "1")}}>{listValue.option1}</button>
                            <button style={{marginLeft:"5%", width:"40%"}}  className={(listValue.your_answer === "2" &&  listValue.your_answer !== listValue.answer) ? "btn btn-danger" : (listValue.answer === "2" ? "btn btn-success": "") } onClick={() => {this.handleChange(index, "2")}}>{listValue.option2}</button>
                            <br />
                            <br />
                            <button style={{marginRight:"5%", width:"40%"}} className={(listValue.your_answer === "3" &&  listValue.your_answer !== listValue.answer) ? "btn btn-danger" : (listValue.answer === "3" ? "btn btn-success": "") }>{listValue.option3}</button>
                            <button style={{marginLeft:"5%", width:"40%"}} className={(listValue.your_answer === "4" &&  listValue.your_answer !== listValue.answer) ? "btn btn-danger" : (listValue.answer === "4" ? "btn btn-success": "") }>{listValue.option4}</button>

                            </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            </div>
                        )
                    })
                }

            <Link
              to="/quiz"
              className="btn btn-dark btn-lg"
              style={{ padding: 8 }}
            >
              <h4>Take some other quiz now!</h4>
            </Link>

            </div>
        )
    }
}
