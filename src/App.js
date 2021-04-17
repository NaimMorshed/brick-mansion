import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Explore from './components/Explore/Explore';
import Admin from './components/Admin/Admin/Admin';
import User from './components/Admin/User/User';
export const UserContext = createContext();

function App() {

  const [authentication, setAuthentication] = useState({
    loggedIn: false,
    email: '',
    displayName: '',
    photoUrl: ''
  });

  return (
    <UserContext.Provider value={[authentication, setAuthentication]}>
      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
