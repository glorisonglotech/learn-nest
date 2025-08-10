import React from "react";

function Navbar() {
  return (
    <div className="border flex justify-between p-3 items-center">
      <div>Logo</div>
      <div className="flex gap-10 items-center">
        {/* nav for Desktop view */}
        <ul className="flex gap-5">
          <li>Dashboard</li>
          <li>courses</li>
          <li>Users</li>
          <li>Assessments</li>
          <li>Progress</li>
          <li>communication</li>
        </ul>
        <div className="flex  ">
          <button className=" mx-4 w-20  rounded p-2 bg-blue-700">Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
