import React from "react";

function Progress() {
  return (
    <section className="p-6">
      <div>
        <h1>My Learning Progress</h1>
        {/* drop down */}

        {/* Export button  */}
      </div>
      // Progress Overview
      <div>
        <p>overall progress</p>
        {/* circles */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {/* course progress */}
      <div>
        <h2>Course Progress</h2>
        <div className="course-progress"></div>
      </div>
      {/* Recent achivemenst  */}
      <div>
        <h2>Recent Achievements</h2>
        <ul>
          <li>Completed "Introduction to React"</li>
          <li>Passed "JavaScript Basics" Quiz</li>
          <li>Earned "HTML Mastery" Badge</li>
        </ul>
      </div>
      {/* Assements grades  */}
      <div></div>


      {/*Upcoming DEadlines 
       */}
       <div></div>

       {/* study Time */}
       <div></div>
    </section>
  );
}

export default Progress;
