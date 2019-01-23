import React, { Component } from 'react';
import './App.css';
import CommandBar from "./components/CommandBar"
import JokeDisplayBar from "./components/JokeDisplayBar"


class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      lastname : "",
      jokeNum : 6,
      jokeList : []
    }
  }

  onNameChange = (event) =>{
    this.setState({name:event.target.value});
  }

  onLastNameChange = (event) =>{
    this.setState({lastname:event.target.value});
  }

  onSubmit =  () => {
    fetch(`http://api.icndb.com/jokes/random/${this.state.jokeNum}?escape=javascriptfirstName=${encodeURIComponent(this.state.name)}&lastName=${encodeURIComponent(this.state.lastname)}`)
      .then(res=>res.json())
      .then(data => this.setState({jokeList: data.value}))
      .catch(console.log)
  }

  render() {
    console.log(this.state);
    return (
      <div className="center2 pa2">
        <h1 className="animated bounceInDown mb3">JOKE-ME</h1>
        <CommandBar onNameChange ={this.onNameChange} onLastNameChange={this.onLastNameChange} onSubmit={this.onSubmit}/>
        <JokeDisplayBar jokeList={this.state.jokeList}/>
      </div>
    );
  }
}

export default App;
    