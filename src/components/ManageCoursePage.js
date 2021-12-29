import React from "react";

const ManageCoursePage = (props) => {
  return (
    <React.Fragment>
      <h1>Manage Course Page</h1>
      {props.match.params.slug}
    </React.Fragment>
  );
};

export default ManageCoursePage;
