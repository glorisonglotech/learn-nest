import React, { useEffect, useState } from "react";
import api from "../components/lib/axios";
import toast from "react-hot-toast";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [create, setCreate] = useState(false);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/users", {
        title,
        description,
        category,
      });
      toast.success("Course created successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setCreate(false);
    } catch (error) {
      toast.error("Failed to create course. Try again.");
      console.error(error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = create ? "hidden" : "auto";
  }, [create]);

  const onCreate = () => setCreate((prev) => !prev);

  return (
    <main className="p-4">
      <section>
        <header>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-600">
            Welcome Back! Here's an overview of your courses and activities
          </p>
        </header>

        {/* Course Management */}
        <section className="grid grid-cols-1 gap-4 mt-3">
          <article className="border flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">My Courses</h2>
            <button
              onClick={onCreate}
              className="md:w-[20%] bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-500 px-3"
            >
              Create Course
            </button>

            {create && (
              <div
                className="fixed inset-0 bg-gray-500/25 flex justify-center items-center z-50"
                onClick={onCreate}
              >
                <dialog
                  open
                  className="bg-white p-6 rounded-lg md:w-[50%] shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h1 className="text-xl font-bold mb-4">Create New Course</h1>

                  <form onSubmit={handleCreateCourse}>
                    <fieldset className="mb-3">
                      <label className="text-sm font-medium">Course Title</label>
                      <input
                        type="text"
                        className="border w-full px-2 py-1 rounded"
                        placeholder="Enter course title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </fieldset>

                    <fieldset className="mb-3">
                      <label className="text-sm font-medium">Course Description</label>
                      <input
                        type="text"
                        className="border w-full px-2 py-1 rounded"
                        placeholder="Enter course description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </fieldset>

                    <fieldset className="mb-3">
                      <label className="text-sm font-medium">Category</label>
                      <input
                        type="text"
                        className="border w-full px-2 py-1 rounded"
                        placeholder="Select a category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      />
                    </fieldset>

                    <footer className="flex justify-end gap-4 mt-4">
                      <button
                        type="button"
                        className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={onCreate}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Save Course
                      </button>
                    </footer>
                  </form>
                </dialog>
              </div>
            )}
          </article>

          <article className="border p-4">
            <h2 className="text-lg font-semibold">Enrollment Statistics</h2>
          </article>

          <article className="border p-4">
            <h2 className="mb-4 text-lg font-semibold">Progress Overview</h2>
            <p>Completed Courses: 5</p>
            <p>In Progress: 3</p>
          </article>
        </section>

        {/* Discussions & Messages */}
        <section className="grid grid-cols-1 mt-4 gap-4">
          <article className="border p-4">
            <h2 className="text-lg font-semibold">Recent Forum Discussions</h2>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="bg-blue-50 p-4 rounded">
                <header className="flex justify-between">
                  <h3>AI Workshop Thoughts</h3>
                  <time>15.1</time>
                </header>
                <p>Intro to artificial intelligence</p>
              </li>
              <li className="bg-blue-50 p-4 rounded">
                <header className="flex justify-between">
                  <h3>AI Workshop Thoughts</h3>
                  <time>15.2</time>
                </header>
                <p>Intro to artificial intelligence</p>
              </li>
            </ul>
          </article>

          <aside className="border p-4">
            <h2 className="text-lg font-semibold">Recent Messages</h2>
          </aside>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
