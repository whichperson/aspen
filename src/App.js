import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import Overview from "./components/Overview";
import Detection from "./components/Detection";
import Summary from "./components/Summary";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/detection" component={Detection} />
        <Route path="/summary" component={Summary} />
      </Switch>
    </Router>
  )

}

export default App;
