import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Exo 2"',
      '"Vazir"',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Home/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
