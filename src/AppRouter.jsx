import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Login';
import App from './App';

function AppRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/"
            component={App}
          />
        </Switch>
      </Router> 
    </div>
  );
}

export default AppRouter;