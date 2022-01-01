import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }
  return (
    <React.Fragment>
      <h1>Manage Course</h1>
      <CourseForm course={course} onChange={handleChange} />
    </React.Fragment>
  );
};

export default ManageCoursePage;
