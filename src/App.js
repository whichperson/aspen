import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DetectionDemoV1 from './demo/DetectionDemoV1'
import DetectionDemoV2 from './demo/DetectionDemoV2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Oops! This is a work in progress.</h1>
          <h2>Go to <a href="/nofeedback">demo version 1 (no feedback)</a></h2>
          <h2>Or to <a href="/feedback">demo version 2 (feedback)</a></h2>
        </Route>
        <Route path="/nofeedback">
          <DetectionDemoV1 />
        </Route>
        <Route path="/feedback">
          <DetectionDemoV2 />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
