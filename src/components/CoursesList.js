import React from "react";

function CoursesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
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
  );
}

export default CoursesList;
