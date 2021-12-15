import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route exact path='/'>
         <Home/>
      </Route>
      <Route path='/name/:countryName'>
         <CountryDetail/> 
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
