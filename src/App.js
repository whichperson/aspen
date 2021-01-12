import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DetectionDemoV1 from './demo/DetectionDemoV1'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <DetectionDemoV1 />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
