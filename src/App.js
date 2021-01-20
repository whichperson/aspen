import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import Overview from "./components/Overview";
import Calibration from "./components/Calibration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/calibration" component={Calibration} />
      </Switch>
    </Router>
  )

}

export default App;
