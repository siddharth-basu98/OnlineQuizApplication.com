import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">

      <main role="main">

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-1">Hello, to the online test application!</h1>
          <p>This is an application to test your wits and see how much you know about a topic. Give it a try and see where you stand today! </p>
          <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/quiz" role="button" style={{fontSize:20}}>Go to the quiz &raquo;</a></p>
        </div>
      </div>

      <br />


      <div className="container" style={{marginTop:50, fontSize:15}}>
        <div className="row">
          <div className="col-md-4">
            <h2>Search Events</h2>
            <p>The application allows the user to search events based on different parameters such as the event name, location of the event, 
              the domain the event belongs to and the starting date of the event. The search bar on the events page dynamically updates the 
              list of events shown on the page. 
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/events" role="button" style={{fontSize:15}}>View Details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Add, update and Delete events</h2>
            <p>The application provides the option of adding and updating the events. The add and update is implemented through a form interface 
              where the user is required to enter all the details of the event such as tile, domain, starting date, ending date, price, organizer name 
              etc. There are delete buttons associated to the events which remove the event from the database. 
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/events" role="button" style={{fontSize:15}}>View Details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Sorting events</h2>
            <p>On the main landing page of the application where all the events are listed, there is a sorting button with many sort by options. 
              The implemented ones are sort by price with two variations - lowest to highest and highest to lowest. There is also a clear sort and 
              sort button which clears the filters and then goes back to display the entire list of events again. 
            </p>
            <p><a className="btn btn-primary btn-lg" style={{padding:30}} href="/events" role="button" style={{fontSize:15}}>View Details &raquo;</a></p>
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
