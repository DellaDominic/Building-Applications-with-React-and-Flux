import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

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
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <th>{course.title}</th>
                <th>{course.authorId}</th>
                <th>{course.category}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default CoursesPage;
