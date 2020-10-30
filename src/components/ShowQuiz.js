import Axios from 'axios';
import React, { Component } from 'react'
import axios from 'axios'
import ShowResults from './ShowResults';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class ShowQuiz extends Component {


    constructor(props) {
        super(props);
        this.state = {
          questions : [],
          done: false
        };
    }

    getQuestions = () => {
        axios.get(`http://localhost:3000/question?domain=${this.props.match.params.domain}`)
        .then((result)=>{
            this.setState({
                questions: result.data
            })
        })
        .catch((error)=>console.log("There is some error ", error))
    }

    componentDidMount(){
        this.getQuestions() ; 
    }

    handleChange = (i, option) => {
        let temp_ques = this.state.questions ;
        if(temp_ques.length===0){
            return
        } 
        temp_ques[i].your_answer = option

        this.setState({
            questions:temp_ques
        })
    }
    
    render() {

        if(this.state.done){
            return(
                <div>
                    <ShowResults data={this.state.questions}/>
                </div>
            )
        }

        else{
        console.log(this.state.questions) ;
        return (
            <div style={{marginBottom:60}}>
                <h1 className="display-3">Questions</h1>
        <p style={{ fontSize: 20 }}>
          Click on the option you think is correct. Once you do the selected option is shown in blue color. <br/>Finally after attending all the questions click the submit button to get <b>your score.</b> 
        </p>
        <br />
                {
                    this.state.questions.map((listValue, index) => {
                        return(

                            <div className="container">
                            <div class="card">
                            <h5 class="card-header">Question {index+1}</h5>
                            <div class="card-body">
                            <h5 class="card-title">{listValue.question}</h5>

                            <button style={{marginRight:"5%", width:"40%"}} class={this.state.questions[index].your_answer==="1" ? ("btn btn-primary btn-lg") : ("btn btn-dark btn-lg")} onClick={() => {this.handleChange(index, "1")}}>{listValue.option1}</button>
                            <button style={{marginLeft:"5%", width:"40%"}} class={this.state.questions[index].your_answer==="2" ? ("btn btn-primary btn-lg") : ("btn btn-dark btn-lg")} onClick={() => {this.handleChange(index, "2")}}>{listValue.option2}</button>
                            <br />
                            <br />
                            <button style={{marginRight:"5%", width:"40%"}} class={this.state.questions[index].your_answer==="3" ? ("btn btn-primary btn-lg") : ("btn btn-dark btn-lg")} onClick={() => {this.handleChange(index, "3")}}>{listValue.option3}</button>
                            <button style={{marginLeft:"5%", width:"40%"}} class={this.state.questions[index].your_answer==="4" ? ("btn btn-primary btn-lg") : ("btn btn-dark btn-lg")} onClick={() => {this.handleChange(index, "4")}}>{listValue.option4}</button>

                            </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            </div>
                        )
                    })
                }
                
                <button onClick={() => {this.setState({done:true})}} className="btn btn-lg btn-success">Submit answers</button>
                <br />
                <br />
                <Link
              to="/quiz"
              className="btn btn-danger btn-lg"
              style={{ padding: 8 }}
            >
              <h4>Go back to all quizzes</h4>
            </Link>

            </div>
        )
        }
    }
}
