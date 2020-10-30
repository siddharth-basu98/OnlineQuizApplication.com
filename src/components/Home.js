import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">

      <main role="main">

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Welcome to the online test application!</h1>
          <p>This is an application to test your wits and see how much you know about a topic. Give it a try and see where you stand today! </p>
          <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/quiz" role="button" style={{fontSize:20}}>Go to the quiz &raquo;</a></p>
        </div>
      </div>

      <br />


      <div className="container" style={{marginTop:50, fontSize:15}}>
        <div className="row">
          <div className="col-md-4">
            <h2>Test your knowledge</h2>
            <p>The application allows the user to attempt quizzes belonging to different domains. Currently the user can attempt three quizzes for demo
              purposes. Once the user selects the quiz module, there are 5 questions in each module which get displayed. The user can then attempt the quiz.
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/quiz" role="button" style={{fontSize:15}}>View quizzes &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Get your score</h2>
            <p>The application allows the user to submit his/her answers after clicking the options. Upon that, the application takes the user to the scoring 
              page where the number of answers the user has answered correctly get displayed. Below which the user can find the assessment section containing 
              the answered questions. 
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/quiz" role="button" style={{fontSize:15}}>View quizzes &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>View the assessment and answers</h2>
            <p>On the main assessment page of the application there is a question wise analysis of the quiz. Each question in marked correct or wrong based on
              the answers received by the user. If the question is answered wrong, then the right answer is marked in green and user's wrong answer in red. 
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/quiz" role="button" style={{fontSize:15}}>View quizzes &raquo;</a></p>
          </div>
        </div>

        <hr />

      </div>

    </main>

    <footer className="container">
      <p>&copy; Company 2020-2021</p>
    </footer>
    </div>
        )
    }
}
