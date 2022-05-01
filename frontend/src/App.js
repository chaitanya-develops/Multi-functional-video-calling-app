import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return ( <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path= "/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
