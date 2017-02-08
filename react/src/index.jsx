import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {
  grey100, grey300, grey400, grey600,
  orange700, orange500, orange400
} from 'material-ui/styles/colors';

const RPN = require('./rpn');

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    borderColor: grey600,
    primary1Color: orange700,
    primary2Color: orange500,
    primary3Color: orange400,
  },
});


class RPNRow extends React.Component {
  constructor (props){
    super(props);
  }

  render () {
    return (
      <div className="rpn-row">
        <div className="expression">{this.props.expression}</div>
        <div className="result">{RPN.solveRPN(this.props.expression)}</div>
      </div>
    );
  }
}



class RPNApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      userInput: '',
      inputHistory: ["1 2 *", "3 4 5 - *"]
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleChanged = this._handleChanged.bind(this);
  }

  _handleChanged (event, newValue) {
    this.setState({
      userInput: newValue
    });
  }

  _handleKeyDown (event) {
    if(event.keyCode === 13){
      // register
      // flush
      console.log(this.state.userInput);

      this.setState((state) => {
        return {
          userInput: '',
          inputHistory: [state.userInput].concat(state.inputHistory)
        }
      });
    }
  }



  render () {
    const rows = this.state.inputHistory.map((input) => {
      return <RPNRow key={input} expression={input}></RPNRow>;
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="rpn-app">
          <AppBar
            title="RPN Calculator"
            showMenuIconButton={false}
          />
          <div className="wrapper">
            <TextField
              className="text-field"
              floatingLabelText="Input RPN Expression"
              value={this.state.userInput}
              onChange={this._handleChanged}
              onKeyDown={this._handleKeyDown}
            />
            <div className="history">{rows}</div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}



render(<RPNApp />, document.getElementById('rpn-app'));
