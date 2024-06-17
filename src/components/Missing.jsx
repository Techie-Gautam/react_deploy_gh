import React from "react";
import { Link } from "react-router-dom";

function Missing() {
  return (
    <>
      <h2>Post Not Found</h2>
      <p>Well, thats's disappointing.</p>
      <p>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </>
  )
}

export default Missing;
