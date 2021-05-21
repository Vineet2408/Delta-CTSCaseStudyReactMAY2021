import './App.css';
import {Button,Grid} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Route} from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "red",
    backgroundColor:"blue",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <Route path="/">
            <RegistrationPage></RegistrationPage>
        </Route>
    </div>
  );
}

export default App;
