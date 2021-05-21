import './App.css';
import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import Main from './components/layout/Main';
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
    <div className="App">
      <Main>
        <Switch>
          <Route path="/">
            <RegistrationPage></RegistrationPage>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
