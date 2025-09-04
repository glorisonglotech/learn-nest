import React, { useEffect, useState } from "react";
import api from "../components/lib/axios";
import toast from "react-hot-toast";

function Progress() {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("user"))?.id;
        const res = await api.get(`/api/progress/${userId}`);
        setProgress(res.data);
      } catch (error) {
        toast.error("Failed to load progress");
        console.error("Progress fetch error:", error);
      }
    };
    fetchProgress();
  }, []);

  if (!progress) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading progress...
      </div>
    );
  }

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1>My Learning Progress</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Export</button>
      </div>

      <div className="flex flex-col gap-10 border p-4">
        <h2 className="text-2xl">Overall progress</h2>
        <div className="flex flex-col justify-center items-center gap-5">
          <ProgressCircle value={progress.overallCompletion} label="Overall Completion" color="bg-blue-500" size="100px" />
          <ProgressCircle value={progress.coursesCompleted} label="Courses Completed" color="bg-green-500" size="80px" />
          <ProgressCircle value={progress.activeCourses} label="Active Course" color="bg-orange-500" size="70px" />
          <ProgressCircle value={progress.averageGrade} label="Average Grade" color="bg-gray-500" size="60px" />
        </div>
      </div>

      <div className="border my-10 p-4">
        <h2>Course Progress</h2>
        {progress.courseProgress.map((course, index) => (
          <div key={index} className="flex flex-col gap-6 mt-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{course.courseTitle}</h3>
              <div className="bg-green-500 px-4 py-1 rounded-2xl text-white">
                {course.completedPercent}% completed
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-sm text-gray-600">
                <p>Progress</p>
                <p>{course.lessonsCompleted} of {course.totalLessons} lessons</p>
              </div>
              <div className="w-full bg-gray-300 rounded-2xl h-4">
                <div
                  className="bg-blue-500 h-4 rounded-2xl"
                  style={{ width: `${course.completedPercent}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Last activity</p>
              <p>{new Date(course.lastActivity).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border p-4">
        <h2>Recent Achievements</h2>
        <ul className="list-disc ml-6 mt-2 text-green-600">
          {progress.recentAchievements.map((achieve, i) => (
            <li key={i}>{achieve}</li>
          ))}
        </ul>
      </div>

      <div className="my-10 border p-4">
        <h2>Assessment Grades</h2>
        <div className="flex justify-between text-lg font-medium">
          <p>Grade</p>
          <p>{progress.assessmentGrade}%</p>
        </div>
      </div>

      <div className="border p-4">
        <h2>Upcoming Deadlines</h2>
        <p className="text-gray-500">Coming soon...</p>
      </div>

      <div className="border my-10 p-4">
        <h2>Study Time</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p>This week</p>
            <p>{progress.studyTime.weekly} hours</p>
          </div>
          <div className="flex justify-between">
            <p>This month</p>
            <p>{progress.studyTime.monthly} hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressCircle({ value, label, color, size }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`${color} rounded-full flex items-center justify-center text-white font-bold`}
        style={{ width: size, height: size }}
      >
        {value}%
      </div>
      <p className="mt-2 text-sm text-gray-700">{label}</p>
    </div>
  );
}

export default Progress;
