import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/signInOrUp/login'
import SignUp from './components/signInOrUp/signUp'



class Apps extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={App} exact />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  };
  
  export default Apps; 