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

  function handleTitleChange(event) {
    const updatedCourse = { ...course, title: event.target.value };
    setCourse(updatedCourse);
  }
  return (
    <React.Fragment>
      <h1>Manage Course</h1>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </React.Fragment>
  );
};

export default ManageCoursePage;
