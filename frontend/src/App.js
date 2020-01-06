import React from 'react';
import './App.css';
import $ from 'jquery';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
      a: 0,
      b: 0,
    }
    // required to use state in functions
    this.add = this.add.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  add(event) {
    $.ajax({
      url: "http://localhost:8080/" + this.state.a + "/" + this.state.b,
      method: "get"
    }).done(res => {
      this.setState(state => ({
        result: res
      }))
    })
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState(state => ({
      [name]: value
    }))
  }

  render() {
    return (
      <div className="app-wrapper">
        <input type="text" name="a" onChange={this.handleInputChange}></input>
        <input type="text" name="b" onChange={this.handleInputChange}></input>
        <div className="button-wrapper"><button onClick={this.add}>Add</button></div>
        <div className="result">{this.state.result}</div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
