import React from "react";

function Progress() {
  return (
    <section className="p-6">
      <div>
        <h1>My Learning Progress</h1>
        {/* drop down */}
        <button></button>
        {/* Export button  */}
      </div>

      <div className="flex flex-col gap-10 border p-4">
        <div>
          <h1 className="text-2xl">Overall progress</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <p className=" bg-blue-500 rounded-full w-[100px] h-[100px] justify-center flex items-center">
              %
            </p>
            <p>Overall Completion</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="bg-green-500 rounded-full w-[80px] h-[80px] justify-center flex items-center">
              %
            </p>
            <p>Courses Completed</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="bg-orange-500 rounded-full w-[70px] h-[70px] justify-center flex items-center">
              %
            </p>
            <p>Active Course</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="bg-gray-500 rounded-full w-[60px] h-[60px] justify-center flex items-center">
              %
            </p>
            <p>Average Grade</p>
          </div>
        </div>
      </div>

      {/* course progress */}
      <div className="border my-10 p-4">
        <h2>Course Progress</h2>
        <div className=" flex flex-col gap-10">
          <div className="flex justify-between items-center ">
            <div></div>
            <div className="bg-green-500 px-7 rounded-2xl">0% completed</div>
          </div>
          <dix>
            {" "}
            <div className="flex justify-between">
              <p>progress</p>
              <p>0 of 0 lesson </p>
            </div>
            <div className="bar">
              <div className="w-full bg-gray-500 rounded-2xl">
                <div className="w-[80%] rounded-2xl bg-blue-500 p-1"></div>
              </div>
            </div>
          </dix>

          <div className="flex justify-between items-center ">
            <div>
              <p>last activity</p>
              <p>date 8/21/2025 9:47</p>
            </div>
            <div>--</div>
          </div>
        </div>
      </div>

      {/* Recent achivemenst  */}
      <div className="border p-4">
        <h2>Recent Achievements</h2>
        <div className="bg-green-600 p-5 rounded-3xl"></div>
      </div>

      {/* Assements grades  */}
      <div className=" my-10 border p-4">
        <p>Assesments Grades</p>
        <div className=" flex justify-between">
          <div></div>

          <div className="flex gap-5">
            <p>%</p>
            <p>0</p>
          </div>
        </div>
      </div>

      {/*Upcoming DEadlines
       */}
      <div className=" border p-4">
        <p>Upcoming Dealines</p>
      </div>
      {/* study Time */}
      <div className="border my-10 p-4">
        <p>Study Times</p>
        <div className="mt-4">
          <div className="flex justify-between">
            <p>This weeks</p>
            <p>0 hours</p>
          </div>
          <div className="flex justify-between">
            <p>This months</p>
            <p>0 hours</p>
          </div>
          <div className="flex justify-between">
            <p>This weeks</p>
            <p>0 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;
