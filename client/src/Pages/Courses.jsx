import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUsers, faList, faTrash } from "@fortawesome/free-solid-svg-icons";

function Courses() {
  return (
    <div className="p-6">
      {/* Course Management */}
      <h1 className="text-3xl font-bold mb-1">Course Management</h1>
      <p className="text-gray-600 mb-4">
        Create and manage your courses, organize lessons, and handle enrollments
      </p>

      {/* Create New Course Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mb-6 flex items-center gap-2">
        + Create New Course
      </button>

      {/* Course Card */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex items-center justify-between mb-4">
          {/* Students Info */}
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            0 students
          </div>

          {/* Placeholder Image */}
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FontAwesomeIcon icon={faPen} /> Edit
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FontAwesomeIcon icon={faUsers} /> Enrollments
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FontAwesomeIcon icon={faList} /> Modules
          </button>
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
