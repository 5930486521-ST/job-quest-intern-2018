import React, { Component } from 'react';
import {InputField} from "./InputField"

import '../index.css';

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
<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
  <main className="pa4 black-80">
    <div className="measure">
        <div className="center">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <InputField key ="name" changefunction ={this.props.onNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <InputField key ="lastname" changefunction ={this.props.onLastNameChange}/>
          </div>
        </div >
        <div className="center">
          <input type="number"  name="int" min ="1" max="5" placeholder="default:1"></input>
          <div className="form-check">
            <input className="form-check-input" onChange={this.onclickOption(1)} type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={this.onclickOption(2)} type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </label>
          </div>
          <button key="confirmButton" onClick={this.props.onSubmit} type="button" className ="btn btn-outline-success">Success</button>
        </div>
    </div>
  </main>
</article>) 
    ;
  }
}

export default CommandBar;