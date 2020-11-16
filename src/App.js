import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Category, Contact } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => (
            <Home {...props} />
            )
        } />
        <Route path={`/category`} render={(props) => (
            <Category key={props.match.params.slug} {...props} />
            )
        } />
        <Route path={`/contact`} render={(props) => (
            <Contact key={props.match.params.slug} {...props} />
            )
        } />
      </Switch>
    </Router>
  );
}

export default App;
