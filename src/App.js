import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import SignIn from '../src/pages/SignIn';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
    </Router>
  );
}

export default App;
