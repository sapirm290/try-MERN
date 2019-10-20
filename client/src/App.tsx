import React, { useState, useEffect } from 'react';
import { purple, green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import AddRide from './components/AddRide';
import Dashboard from './components/Dashboard';
import { rootReducer, AppState } from './store'
import { connect, Provider, } from 'react-redux'
import { createStore, applyMiddleware, Action } from 'redux'
import thunkMiddleware, { ThunkDispatch, ThunkAction } from 'redux-thunk'
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ec407a',
    }
  },
  typography: {
    fontFamily: [
      // '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunkMiddleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));
const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware),
);
const useStyles = makeStyles(theme => ({
  dashboard: {
    paddingTop: theme.spacing(12),
  },
}))
const App: React.FC = (props: any) => {
  const classes = useStyles()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Container className={classes.dashboard} >
            <AddRide />
            <Dashboard />
          </Container>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App