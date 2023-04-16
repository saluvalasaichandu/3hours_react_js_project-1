import React from "react";
const Select = (props) => {
  return (
    <div style={{display:"inline"}}>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} onChange={props.onChange} name={props.id}>
        <option>Choose a category</option>
        <option>Electronic Item</option>
        <option>Food Items</option>
        <option>SkinCare Items</option>
      </select>
    </div>
  );
};
export default Select;