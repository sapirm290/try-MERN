import React, { useState, useEffect } from 'react';
import { purple, green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
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


const App: React.FC = () => {
  const [messages, setMessages] = useState([])
  const getMessages = async () => {
    const response: Response = await fetch('http://localhost:3001/api/getData')
    const myJson = await response.json();
    setMessages(myJson.data)
    console.log(myJson.data)
  }
  useEffect(() => {
    getMessages()
    return () => {
    };
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard rides={messages} />
      </ThemeProvider>
    </div>
  );
}

export default App;
