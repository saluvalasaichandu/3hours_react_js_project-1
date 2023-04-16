import React from "react";
const Input = (props) => {
  return (
    <div style={{display:"inline"}}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} onChange={props.onChange} ></input>
    </div>
  );
};
export default Input;