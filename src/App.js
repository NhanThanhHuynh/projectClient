import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginsandRegister/LoginForm'
import LoginRedirect from "./components/Redirect/LoginRedirect";
import LoginProvider from "./contexts/Auth";
import RegisterForm from './components/LoginsandRegister/RegisterForm'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Join from './components/Chats/Join'
import Chat from "./components/Chats/Chat";
import MainRedirect from './components/Redirect/MainRedirect'
import Currency from "./components/Currency/Currency";
import dashboard from './views/Dashboard'
import PostcontextProvider from './contexts/Post'

function App(){
  return (
    <LoginProvider>
      <PostcontextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginRedirect} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path ='/register' component ={RegisterForm}/>
          <ProtectedRoute exact path='/mainredirect' component ={MainRedirect}/>
          <ProtectedRoute exact path='/currency' component = {Currency} />
          <ProtectedRoute exact path ='/dashboard' component={Join} />
          <ProtectedRoute path ='/chat' component={Chat} />
          <ProtectedRoute path='/learning' exact component = {dashboard}/>
        </Switch>
      </Router>
      </PostcontextProvider>
    </LoginProvider>
  );
};

export default App;
