import React from 'react';
import './App.css';


import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//Pages
import Home from './pages/home';
import PageNotFound from'./pages/404';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Rooms from './pages/rooms';
import Employees from './pages/employees';
//Paths
import path from './paths';
//components
import Nav from "./components/Nav";
//state
import state from './state';

class App extends React.Component{
  state =  state;
  render() {
    return (
        <Router>
          <Nav/>
          <Switch>
            <Route exact path={path.home} component={Home} />
            <Route exact path={path.login} component={Login} />
            <Route exact path={path.signUp} component={SignUp} />
            <Route exact path={path.getRooms} component={Rooms} />
            <Route exact path={path.getEmployees} component={Employees} />
            <Route exact path='/404' component={PageNotFound} />
            <Redirect to='/404'/>
          </Switch>
        </Router>
    );
  }

}

export default App;
