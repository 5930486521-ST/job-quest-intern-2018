import React from "react";

export const InputField = (props) => {
    return (<div className="input-group mb-3">
                <input type="text" className="form-control" onChange={props.changefunction} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>)
};