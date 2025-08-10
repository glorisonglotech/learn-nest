import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border flex justify-between p-3 items-center">
      <div>Logo</div>
      <div className="flex gap-10 items-center">
        {/* nav for Desktop view */}
        <ul className="flex gap-5">
          <Link to="/">Dashboard</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/users">USers</Link>
          <Link to="/assessments">Assessments</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/communication">Communication</Link>
        </ul>
        <div className="flex">
          <Link to="/login" className="  bg-blue-700">
            Login
          </Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
