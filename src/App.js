import React, { Component } from 'react';
import {Router, Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import history from './history';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Startcall from './components/Startcall';
import Purpose from './components/Purpose';
import Connecting from './components/Connecting';
import Unableconnect from './components/Unableconnect';
import Changelang from './components/Changelang';
import Callhistory from './components/Callhistory';
import Feedback from './components/Feedback';
import Profile from './components/Profile';
import ALogin from './components/admin/Login';
import Activecalls from './components/admin/Activecalls';
import Acallhistory from './components/admin/Acallhistory';
import Overview from './components/admin/Overview';
import Users from './components/admin/Users';

class App extends Component {
  
  constructor(props) {
      super(props);    
      this.state = {

      }   
  }  

  render() {
    return (
      <HashRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/purpose" component={Purpose} />
          <PrivateRoute exact path="/startcall" component={Startcall} /> 
          <PrivateRoute exact path="/connecting" component={Connecting} />
          <PrivateRoute exact path="/unableconnect" component={Unableconnect} />
          <PrivateRoute exact path="/changelang" component={Changelang} />
          <PrivateRoute exact path="/callhistory" component={Callhistory} />
          <PrivateRoute exact path="/feedback" component={Feedback} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/admin/login" component={ALogin} />
          <Route exact path="/admin/activecalls" component={Activecalls} />
          <Route exact path="/admin/acallhistory" component={Acallhistory} />
          <Route exact path="/admin/overview" component={Overview} />
          <Route exact path="/admin/users" component={Users} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;