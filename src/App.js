import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
