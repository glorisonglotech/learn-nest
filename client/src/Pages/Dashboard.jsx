import React, { useEffect, useState } from "react";

function Dashboard() {
  const [create, setCreate] = useState(false);
  useEffect(() => {
    if (create) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [create]);
  const onCreate = () => {
    setCreate((prev) => !prev); // ✅ safer toggle
  };
  return (
    <main className="p-4">
      <section className="">
        <h1 className="">Dashboard</h1>
        <p>Welcome Back! Here an overview of your courses and activities</p>
        {/* cards */}
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols- gap-4 mt-3">
          {/* My course */}
          <div className=" border flex  justify-between items-center p-4">
            <h2>My Courses</h2>
            <div className=" md:w-[20%] bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-500 justify-center items-center flex px-3 ">
              <button onClick={onCreate}>Create Course</button>
            </div>

            {/* Create form */}
            {create && (
              <div
                className="fixed inset-0 bg-gray-500/25 bg-opacity-50 flex justify-center  items-center z-50"
                onClick={onCreate}
              >
                <div
                  className="bg-white p-6 rounded-lg md:w-[50%] shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h1 className="text-xl font-bold mb-4">Create New Course</h1>

                  <div className="mb-3">
                    <h2 className="text-sm">Course Title</h2>
                    <input
                      type="text"
                      className="border w-full px-2 py-1 rounded"
                      placeholder="Enter course title"
                    />
                  </div>

                  <div className="mb-3">
                    <h2 className="text-sm">Course Description</h2>
                    <input
                      type="text"
                      className="border w-full px-2 py-1 rounded"
                      placeholder="Enter course description"
                    />
                  </div>

                  <div className="mb-3">
                    <h2 className="text-sm">Category</h2>
                    <input
                      type="text"
                      className="border w-full px-2 py-1 rounded"
                      placeholder="Select a category"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={onCreate} // closes modal by toggling
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={onCreate}
                    >
                      Save Course
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Enrollment statistics */}
          <div className=" border p-4">
            <h2>Enrollment Statistics</h2>
          </div>
          {/* Progress overview */}
          <div className=" border p-4">
            <h2 className="mb-4">Progress Overview</h2>
            <p>Completed Courses: 5</p>
            <p>In Progress: 3</p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {/* Recent forum discussion */}
          <div className=" border p-4">
            <h2>Recent Forum Discussions</h2>
            <ul className=" flex  flex-col gap-10 mt-4">
              <li className="bg-blue-50 p-5">
                <div className="flex justify-between">
                  <h2>AI WorkShop Thoughts</h2>
                  <p>15.1</p>
                </div>
                <p>Intro to artificial intelliegnce</p>
                <p>By</p>
              </li>
              bg-blue-50
              <li className="bg-blue-50 p-5">
                <div className="flex justify-between">
                  <h2>AI WorkShop Thoughts</h2>
                  <p>15.2</p>
                </div>
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
