import React, { Component } from 'react';
import './App.css';
import CommandBar from "./components/CommandBar"
import JokeDisplayBar from "./components/JokeDisplayBar"
var randomColor = require('randomcolor'); 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      lastname : "",
      jokeNum : 5,
      valid : true,
      typeSelected :{nerdy:false,explicit:false},
      isFetching : false,
      jokeList : [],
      colorList :[]
    };
  }

  onNameChange = (event) =>{
    var name = event.target.value;
    if (name.includes('\\') ) this.setState({name:name , valid:false});
    else this.setState({name:name , valid:true});
  }

  onLastNameChange = (event) =>{
    var lastname = event.target.value;
    if (lastname.includes('\\') ) this.setState({lastname:lastname , valid:false});
    else this.setState({lastname:lastname , valid:true});
  }

  onNumChange = (event) =>{
    const jokeNum = event.target.value;
    var jokeObj = document.getElementById("jokeNum");
    if (!jokeObj.checkValidity()) {
      this.setState({jokeNum:Number(jokeNum), valid:false});
    }else {
      if(jokeNum ==="") this.setState({jokeNum:5 , valid:true});
      else this.setState({jokeNum:Number(jokeNum) , valid:true});
    }
  }
  
  onclickToggle = (type) => () =>{
    const typeSelected = Object.assign({},this.state.typeSelected)
    typeSelected[type] = !(typeSelected[type]);
    this.setState({typeSelected:typeSelected});
  }

  getQueryStr(typeSelected){
    const {jokeNum,name,lastname} = this.state;
    var selected = []; 
    if(Object.values(typeSelected).reduce((total, num) => (total + num))){
      if (typeSelected.nerdy) selected.push("nerdy");
      if (typeSelected.explicit) selected.push("explicit");
      return `http://api.icndb.com/jokes/random/${jokeNum}?
        escape=javascript&firstName=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastname)}
        &limitTo=[${encodeURIComponent(selected.join())}]`;
    }return `http://api.icndb.com/jokes/random/${jokeNum}?
        escape=javascript&firstName=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastname)}`;
  }

  onSubmit =  () => {
    const {jokeNum,valid,typeSelected} = this.state;
    if (!valid) alert("Your First Name and Last Name couldn't contain Backslash.\nAnd number of jokes has to be positive integer");
    else{   
      this.setState({isFetching:true,jokeList:[]});
      fetch(this.getQueryStr(typeSelected))
        .then(res=>res.json())
        .then(data =>{
          var provideNum = data.value.length;
          if ( provideNum!== Number(jokeNum)) alert(`You get ${provideNum} jokes from ${jokeNum}, There are all Jokes from API`)
          this.setState({jokeList: data.value,isFetching:false,colorList:data.value.map(()=> randomColor({luminosity: 'light'}))})})
        .catch(console.log)
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className="center2 pa2">
        <h1 className="animated bounceInDown mb3">JOKE-ME</h1>
        <CommandBar onNameChange ={this.onNameChange} onLastNameChange={this.onLastNameChange} onNumChange={this.onNumChange} onclickToggle={this.onclickToggle} onSubmit={this.onSubmit}/>
        {this.state.isFetching? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>:<div/>}
        <JokeDisplayBar jokeList={this.state.jokeList} colorList={this.state.colorList}/>
      </div>
    );
  }
}

export default App;
    