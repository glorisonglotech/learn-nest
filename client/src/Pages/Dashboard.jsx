import React from "react";

function Dashboard() {
  return (
    <main>
      <section>
        <h1 className="">Dashboard</h1>
        <p>Welcome Back! Here an overview of your courses and activities</p>
        {/* cardsf */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* My course */}
          <div className=" border p-4">
            <h2>My Courses</h2>
            <button>Create Course</button>
            {/* edit and delete */}
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          {/* Enrollment statistics */}
          <div className=" border p-4">
            <h2>Enrollment Statistics</h2>
            <p>Total Enrollments: 150</p>
            <p>Active Courses: 10</p>
            <p>0 student enrolled</p>
          </div>
          {/* Progress overview */}
          <div className=" border p-4">
            <h2>Progress Overview</h2>
            <p>Completed Courses: 5</p>
            <p>In Progress: 3</p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Recent forum discussion */}
          <div className=" border p-4">
            <h2>Recent Forum Discussions</h2>
            <ul>
              <li>
                <h2>AI WorkShop Thoughts</h2>
                <p>Intro to artificial intelliegnce</p>
                <p>By</p>
              </li>
              <li>
                <h2>AI WorkShop Thoughts</h2>
                <p>Intro to artificial intelliegnce</p>
                <p>By</p>
              </li>
            </ul>
          </div>
          {/* Recent Messages */}
          <div className=" border p-4">
            <h2>Recent Messages</h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
