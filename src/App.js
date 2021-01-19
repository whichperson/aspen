import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import Overview from "./components/Overview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/overview" component={Overview} />
      </Switch>
    </Router>
  )

}

export default App;
