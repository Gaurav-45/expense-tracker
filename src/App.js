import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
