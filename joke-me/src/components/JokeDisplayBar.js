import React from "react";

const JokeDisplayBar = (props) => {
    return (<div className="input-group mb-3">
                {props.jokeList.map(joke=><h3 key={joke.id}>{joke.joke}</h3>)}
            </div>)
};

export default JokeDisplayBar;