import React from "react";

const FormComponent = (props) => (
<div className="center">
    <div className="form-group fw6 lh-copy f6 pr2 pl2">
        <label htmlFor="exampleFormControlInput1 ">{props.name+":"}</label>
        <div className="center">
            {props.children}
        </div>
    </div>
</div>);

export default FormComponent;