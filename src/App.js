import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home/>
        </Route>
        <Route exact path="/movie">
          <Movie/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
