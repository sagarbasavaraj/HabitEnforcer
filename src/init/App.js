import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

import Welcome from '../main/components/Welcome';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Welcome />
  </MuiThemeProvider>
);

export default App;
