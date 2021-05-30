import './App.css';
import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import Main from './components/layout/Main';
import RegistrationSuccessful from './pages/RegistrationSuccessful';
import LoginPage from './pages/LoginPage';
import CustomerProfile from './pages/CustomerProfile'
import ApplyLoanPage from './pages/ApplyLoanPage';
import UpdateCustomerDetailsPage from './pages/UpdateCustomerDetailsPage';
import Home from './pages/Home';
import LogoutPage from './pages/LogoutPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "red",
    backgroundColor: "blue",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="container-fluid mt-5">
      <Main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <RegistrationPage></RegistrationPage>
          </Route>
          <Route exact path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/profile">
            <CustomerProfile></CustomerProfile>
          </Route>
          <Route path="/rs">
            <RegistrationSuccessful></RegistrationSuccessful>
          </Route>
          <Route path="/applyLoan" render={(history)=>(<ApplyLoanPage history={history}></ApplyLoanPage>)}>
            
          </Route>
          <Route path="/updateProfile">
            <UpdateCustomerDetailsPage></UpdateCustomerDetailsPage>
          </Route>
          <Route exact path="/logout">
            <LogoutPage></LogoutPage>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
