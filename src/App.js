import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import ShowTest from './components/ShowTest';

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/:domain" component={ShowTest} />

          {/* 
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/event-add" component={EventAdd} />
          <PrivateRoute path="/event-edit/:id" component={EventEdit} />
          <PrivateRoute path="/events" component={EventList} />
          <PrivateRoute path="/event-detail/:id" component={EventDetail} /> */}
        </Switch>
    </Router>
    </div>
  );
}

export default App;
