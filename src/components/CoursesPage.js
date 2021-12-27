import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList";

function CoursesPage() {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourse(_courses);
    });
  }, []);

  return (
    <React.Fragment>
      <h1> Courses </h1>
      <CoursesList courses={courses} />
    </React.Fragment>
  );
}

export default CoursesPage;
