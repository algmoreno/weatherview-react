import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
