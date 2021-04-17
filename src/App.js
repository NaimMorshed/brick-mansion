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
import System from './components/Admin/System';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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

          <PrivateRoute path="/system">
            <System />
          </PrivateRoute>

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
