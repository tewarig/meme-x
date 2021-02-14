import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import Add from './pages/add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
 


  return (
    <>
      <Router>
      <div>
        <Switch>
          <Route  path="/add">
          <Add/>
          </Route>
          <Route  path="/">
          <Home />
          </Route>
        </Switch>
      </div>
      </Router>
      

  
    </>


  );
}

export default App;
