import React from "react";
import BoxComponent from "./BoxComponent";

const JokeDisplayBar = (props) => {
 return(  <div className=" input-group mb-3 center2">
        {props.jokeList.map((joke,i)=>{
         return (<BoxComponent>
             <span>#{i}</span>
             <h3 className="animated bounceInUp" key={joke.id}>{joke.joke}</h3>
         </BoxComponent>
                
            
              )})  }
        </div>)
           
};

export default JokeDisplayBar;