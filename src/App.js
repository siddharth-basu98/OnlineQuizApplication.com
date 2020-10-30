import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import ShowQuiz from './components/ShowQuiz';

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/:domain" component={ShowQuiz} />

        </Switch>
    </Router>
    </div>
  );
}

export default App;
