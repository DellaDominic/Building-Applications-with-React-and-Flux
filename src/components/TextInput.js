import React from "react";

function TextInput(props) {
  let wrapperClass = "form-group";
  if (props.arror && props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
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
      {props.error && <div className="alert danger-alert">{props.error}</div>}
    </div>
  );
}

export default TextInput;
