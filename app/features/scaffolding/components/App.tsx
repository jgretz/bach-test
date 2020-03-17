import React from 'react';
import {Router} from 'react-router';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import history from '../history';
import Routes from './Routes';
import theme from '../../../styles/theme';

const App = () => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Routes />
    </MuiThemeProvider>
  </Router>
);

export default App;
