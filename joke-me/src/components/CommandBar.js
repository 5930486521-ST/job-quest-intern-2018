import React, { Component } from 'react';
import InputContainer from "./InputContainer"
import BoxContainer from './BoxContainer';

class CommandBar extends Component {
 
  render() {
    return(
    <BoxContainer color="rgb(236, 230, 172)">
      <div className="center">
        <InputContainer name="First Name">
          <input type="text"  className="form-control" onChange={this.props.onNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </InputContainer>
        <InputContainer name="Last Name">
          <input type="text" className="form-control" onChange={this.props.onLastNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </InputContainer>
      </div >
      <div className="center" >
        <InputContainer name="Number of jokes">
          <input type="text" id="jokeNum" className="form-control" name="int"  onChange={this.props.onNumChange} placeholder="Default number is 5"></input>
        </InputContainer>
        <InputContainer name="Types of jokes">
          <div className="checkbox checkbox1">
              <input id="nerdCheckbox" type="checkbox" onChange={this.props.onclickToggle('nerdy')}/>
              <label htmlFor="nerdCheckbox">Nerdy</label>
          </div>
          <div className="checkbox checkbox1">
            <input id="exCheckbox" type="checkbox" onChange={this.props.onclickToggle("explicit")}/>
            <label htmlFor="exCheckbox">Explicit</label>
          </div>
        </InputContainer>
      </div>
      {(this.props.isFetching)? (<button key="confirmButtonDis"  className ="btn btn-light" disabled>Random Jokes</button>):
              (<button key="confirmButton" onClick={this.props.onSubmit} type="submit" className ="btn btn-light" >Random Jokes</button>)}
    </BoxContainer>);
  }
}

export default CommandBar;