import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CoursesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <th>{course.title}</th>
              <th>{course.authorId}</th>
              <th>{course.category}</th>
              <th>
                <Link to={"/course/" + course.slug}>Edit</Link>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
CoursesList.defaultProps = {
  courses: [],
};
export default CoursesList;
