import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginRedirect from "./components/LoginRedirect";
import LoginProvider from "./contexts/Auth";
import RegisterForm from './components/RegisterForm'
import ProtectedRoute from "./components/ProtectedRoute";
import Join from './components/Join'
import Chat from "./components/Chat";

function App(){
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginRedirect} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path ='/register' component ={RegisterForm}/>
          <ProtectedRoute exact path ='/dashboard' component={Join} />
          <ProtectedRoute path ='/chat' component={Chat} />
        </Switch>
      </Router>
    </LoginProvider>
  );
};

export default App;
