import React from "react";
import BoxComponent from "./BoxComponent";


const JokeDisplayBar = (props) => {
    // console.log(props.colorList);
 return( <div className=" input-group mb-3 center2">
            {props.jokeList.map((joke,i)=>(<BoxComponent  key={joke.id} color ={props.colorList[i]}>
                                                <h3>Joke #{i+1}</h3>
                                                <h3 className="animated bounceInUp">{joke.joke}</h3>
                                            </BoxComponent>))}
        </div>)        
};

export default JokeDisplayBar;