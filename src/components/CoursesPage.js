import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourse(_courses);
    });
  }, []);

  return (
    <React.Fragment>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <h1> Courses </h1>
      <CoursesList courses={courses} />
    </React.Fragment>
  );
}

export default CoursesPage;
