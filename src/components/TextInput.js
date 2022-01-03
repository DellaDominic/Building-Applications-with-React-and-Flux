import React from "react";

function TextInput(props) {
  return (
    <div className="from-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          className="form-control"
          id={props.id}
          name={props.name}
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default TextInput;
