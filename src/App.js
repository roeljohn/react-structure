import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Category, Contact } from './pages';
import './App.css';

function App() {
  return ( 
    <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} />} />
  );
}

export default App;
