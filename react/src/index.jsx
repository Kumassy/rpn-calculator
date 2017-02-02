import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class RPNApp extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Default" />
      </MuiThemeProvider>
    );
  }
}


render(<RPNApp />, document.getElementById('rpn-app'));
