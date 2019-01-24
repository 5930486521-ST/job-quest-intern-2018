import React, { Component } from 'react';
import CommandBar from "./components/CommandBar";
import JokeDisplayBar from "./components/JokeDisplayBar";
import randomColor from 'randomcolor'; 
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      lastname : "",
      jokeNum : "5",
      typeSelected :{nerdy:false,explicit:false},
      isFetching : false,
      jokeList : [],
      colorList :[]
    };
  }

  onNameChange = (event) =>{
    this.setState({name: event.target.value});
  }

  onLastNameChange = (event) =>{
    this.setState({lastname:event.target.value});
  }

  onNumChange = (event) =>{
    const jokeNum = event.target.value;
    if(jokeNum.trim() ==="") this.setState({jokeNum:"5"});
    else this.setState({jokeNum:jokeNum});
  }
  
  onclickToggle = (type) => () =>{
    const typeSelected = Object.assign({},this.state.typeSelected)
    typeSelected[type] = !(typeSelected[type]);
    this.setState({typeSelected:typeSelected});
  }

  isInputValidated(){
    const {jokeNum,name,lastname} = this.state;
    if (name.includes('\\')) return false;
    if (lastname.includes('\\') ) return false;
    if (isNaN(jokeNum)) return false;
    if (jokeNum.includes("-") || jokeNum.includes(".") || jokeNum.includes('\\')) return false;
    return true;  
  }

  getQueryStr(){
    const {jokeNum,name,lastname,typeSelected} = this.state;
    var selected = []; 
    if(Object.values(typeSelected).reduce((total, num) => (total + num))){
      if (typeSelected.nerdy) selected.push("nerdy");
      if (typeSelected.explicit) selected.push("explicit");
      return `http://api.icndb.com/jokes/random/${encodeURIComponent(parseInt(jokeNum))}?
        escape=javascript&firstName=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastname)}
        &limitTo=[${encodeURIComponent(selected.join())}]`;
    }return `http://api.icndb.com/jokes/random/${encodeURIComponent(parseInt(jokeNum))}?
        escape=javascript&firstName=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastname)}`;
  }

  onSubmit =  () => {
    if (!this.isInputValidated()) {
      alert("Your First Name and Last Name couldn't contain Backslash.\nAnd the number of jokes has to be a positive integer");
    }else{   
      this.setState({isFetching:true, jokeList:[], colorList:[]});
      fetch(this.getQueryStr())
        .then(res=>res.json())
        .then(data =>{
          var provideNum = data.value.length;
          const jokeNum = this.state.jokeNum;
          if ( provideNum!== parseInt(jokeNum)) alert(`You got ${provideNum} jokes from ${jokeNum} requested, These are all Jokes from API`)
          this.setState({jokeList: data.value, isFetching:false, colorList:data.value.map(()=> randomColor({luminosity: 'light'}))})})
        .catch((err)=> {
          this.setState({isFetching:false, jokeList:[], colorList:[]});
          alert("Something went wrong, Please try to fill in again");
          console.log(err);
        })
    }
  }

  render() {
    const {jokeNum,isFetching,jokeList,colorList} = this.state;
    return (
      <div className="center2 pa2">
        <h1 className="animated bounceInDown mb3">JOKE-ME</h1>
        <CommandBar onNameChange ={this.onNameChange} onLastNameChange={this.onLastNameChange} onNumChange={this.onNumChange} 
            onclickToggle={this.onclickToggle} onSubmit={this.onSubmit} jokeNum={jokeNum} isFetching={isFetching}/>
        {isFetching? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>:<div/>}
        <JokeDisplayBar jokeList={jokeList} colorList={colorList}/>
      </div>
    );
  }
}

export default App;
    