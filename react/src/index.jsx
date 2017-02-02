import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const RPN = require('./rpn');

injectTapEventPlugin();



class RPNRow extends React.Component {
  constructor (props){
    super(props);
  }

  render () {
    return (
      <div>
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
      userInput: 'Hello!',
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
      <MuiThemeProvider>
        <div>
          <TextField
            floatingLabelText="Input RPN Expression"
            value={this.state.userInput}
            onChange={this._handleChanged}
            onKeyDown={this._handleKeyDown}
          />
          <ul>{rows}</ul>
        </div>
      </MuiThemeProvider>
    );
  }
}



render(<RPNApp />, document.getElementById('rpn-app'));
