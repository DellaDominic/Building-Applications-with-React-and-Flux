import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        onChange={props.onChange}
        label="Title"
        name="title"
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""} //assigns an empty string if authorId is null
            className="form-control"
          >
            <option value="" />
            <option value="1">Allen Scott</option>
            <option value="2">Cory House</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        name="category"
        onChange={props.onChange}
        label="Category"
        value={props.course.category}
      />

      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
