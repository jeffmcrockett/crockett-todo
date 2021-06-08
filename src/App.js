import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
  }

  handleClick(app) {
    const id = app.isClicked;
    this.setState({
      if (this.state.isClicked = false) {
        this.setState : true;
      } else {
        this.setState = false;
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form>
            <button className="handlerButton" value="submit" onClick={this.handleClick}>CLICK ME!</button>
          </form> 
          <ol>
          </ol>
        </header>
      </div>
    )
  };
}

export default App;
