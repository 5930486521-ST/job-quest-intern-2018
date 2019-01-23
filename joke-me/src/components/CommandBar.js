import React, { Component } from 'react';
import InputComponent from "./InputComponent"
import BoxComponent from './BoxComponent';

class CommandBar extends Component {
 
  render() {
    return(
    <BoxComponent color="rgb(236, 230, 172)">
      <div className="center">
        <InputComponent name="First Name">
          <input type="text"  className="form-control" onChange={this.props.onNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </InputComponent>
        <InputComponent name="Last Name">
          <input type="text" className="form-control" onChange={this.props.onLastNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </InputComponent>
      </div >
      <div className="center" >
        <InputComponent name="Number of jokes">
          <input type="number" id="jokeNum" className="form-control" name="int" min="0"  onChange={this.props.onNumChange} placeholder="default is 5"></input>
        </InputComponent>
        <InputComponent name="Type of jokes">
          <div className="checkbox checkbox1">
              <input id="nerdCheckbox" type="checkbox" onChange={this.props.onclickToggle('nerdy')}/>
              <label htmlFor="nerdCheckbox">Nerdy</label>
          </div>
          <div className="checkbox checkbox1">
            <input id="exCheckbox" type="checkbox" onChange={this.props.onclickToggle("explicit")}/>
            <label htmlFor="exCheckbox">Explicit</label>
          </div>
        </InputComponent>
      </div>
      <button key="confirmButton" onClick={this.props.onSubmit} type="submit" className ="btn btn-light">Random</button>
    </BoxComponent>);
  }
}

export default CommandBar;