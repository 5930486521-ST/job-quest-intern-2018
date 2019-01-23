import React, { Component } from 'react';
import FormComponent from "./FormComponent"

import '../index.css';
import BoxComponent from './BoxComponent';

class CommandBar extends Component {

  constructor(){
    super();
    this.state ={
      isActive : []
    }
  }

  onclickToggle = (i) => () =>{
    const isActive =this.state.isActive
    isActive[i] = !(isActive[i])
    this.setState({isActive:isActive})
  }

  onclickOption = (i) =>() =>{
    console.log(i);
  }

  render() {
    return(
    <BoxComponent color="rgb(236, 230, 172)">
      <div className="center">
        <FormComponent name="First Name">
          <input type="text"  className="form-control" onChange={this.props.onNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </FormComponent>
        <FormComponent name="Last Name">
          <input type="text" className="form-control" onChange={this.props.onLastNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </FormComponent>
      </div >
      <div className="center" >
        <FormComponent name="Number of jokes">
          <input type="number" className="form-control" name="int" min ="1" max="5" placeholder="default:1"></input>
        </FormComponent>
        <FormComponent name="Number of jokes">
          <div class="checkbox checkbox1">
              <input id="nerdCheckbox" type="checkbox" onChange={this.onclickOption(1)}/>
              <label for="nerdCheckbox">nerdy</label>
          </div>
          <div class="checkbox checkbox1">
            <input id="exCheckbox" type="checkbox" onChange={this.onclickOption(2)}/>
            <label for="exCheckbox">explicit</label>
          </div>
        </FormComponent>
      </div>
      <button key="confirmButton" onClick={this.props.onSubmit} type="button" className ="btn btn-light">Success</button>
    </BoxComponent>) 
    ;
  }
}

export default CommandBar;