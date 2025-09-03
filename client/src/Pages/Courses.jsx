import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUsers, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import api from "../components/lib/axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/api/courses");
        setCourses(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        toast.error("Failed to load courses");
        console.error("Fetch error:", error);
      }
    };
    fetchCourses();
  }, []);


  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const openCreateModal = () => {
    setEditingCourse(null);
    setTitle("");
    setDescription("");
    setCategory("");
    setModalOpen(true);
  };

  const openEditModal = (course) => {
    setEditingCourse(course);
    setTitle(course.title);
    setDescription(course.description);
    setCategory(course.category);
    setModalOpen(true);
  };

  const handleDeleteCourse = async (id) => {
    try {
      await api.delete(`/api/courses/${id}`);
      setCourses((prev) => prev.filter((c) => c._id !== id));
      toast.success("Course deleted");
    } catch (error) {
      toast.error("Failed to delete course");
      console.error("Delete error:", error);
    }
  };

  const handleSubmitCourse = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        const res = await api.put(`/api/courses/${editingCourse._id}`, {
          title,
          description,
          category,
        });
        setCourses((prev) =>
          prev.map((c) => (c._id === editingCourse._id ? res.data : c))
        );
        toast.success("Course updated");
      } else {
        const res = await api.post("/api/courses", {
          title,
          description,
          category,
        });
        setCourses((prev) => [...prev, res.data]);
        toast.success("Course created");
      }
      setModalOpen(false);
      setTitle("");
      setDescription("");
      setCategory("");
      setEditingCourse(null);
    } catch (error) {
      toast.error("Failed to save course");
      console.error("Save error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1">Course Management</h1>
      <p className="text-gray-600 mb-4">
        Create and manage your courses, organize lessons, and handle enrollments
      </p>

      <button
        onClick={openCreateModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mb-6 flex items-center gap-2"
      >
        + Create New Course
      </button>

      <div className="grid gap-4">
        {courses.map((course) => (
          <div key={course._id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                {course.students?.length || 0} students
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
            </div>
            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{course.description}</p>
            <p className="text-xs text-pink-500 font-medium mb-2">{course.category}</p>
            {course.tutor && (
              <p className="text-xs text-gray-500 mb-1">
                Tutor: {course.tutor.name || "Unknown"}
              </p>
            )}
            <p className="text-xs text-gray-500 mb-4">
              Modules: {course.modules?.length || 0}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => openEditModal(course)}
              >
                <FontAwesomeIcon icon={faPen} /> Edit
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                <FontAwesomeIcon icon={faUsers} /> Enrollments
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                <FontAwesomeIcon icon={faList} /> Modules
              </button>
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleDeleteCourse(course._id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-500/25 flex justify-center items-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg md:w-[50%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl font-bold mb-4">
              {editingCourse ? "Edit Course" : "Create New Course"}
            </h1>
            <form onSubmit={handleSubmitCourse}>
              <div className="mb-3">
                <label className="text-sm font-medium">Course Title</label>
                <input
                  type="text"
                  className="border w-full px-2 py-1 rounded"
                  placeholder="Enter course title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-sm font-medium">Course Description</label>
                <input
                  type="text"
                  className="border w-full px-2 py-1 rounded"
                  placeholder="Enter course description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-sm font-medium">Category</label>
                <input
                  type="text"
                  className="border w-full px-2 py-1 rounded"
                  placeholder="Select a category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {editingCourse ? "Update Course" : "Save Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
