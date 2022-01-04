import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourse] = useState([]);
  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourse(_courses);
    });
  }, []);
  useEffect(() => {
    getAuthors().then((_authors) => {
      setAuthor(_authors);
    });
  }, []);

  return (
    <React.Fragment>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <h1> Courses </h1>
      <CoursesList courses={courses} authors={authors} />
    </React.Fragment>
  );
}

export default CoursesPage;
