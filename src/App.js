import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      text: ''
    }
  } 

  textStateChange = (event) => {
    this.setState({ text : event.target.value }) 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ todos : [...this.state.todos, this.state.text ]})
    this.setState({ text : "" })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form onSubmit={this.handleSubmit}>
            <input className="todoField" type="text" value={this.state.text} onChange={this.textStateChange}></input>
            <button className="todoButton" type="submit">Add Todo</button>
          </form> 
          <ol>
            {this.state.todos.map((todo, index) => {
              return <li key={index}>{todo}</li>
            })}
          </ol>
        </header>
      </div>
    )
  };
}

export default App;
