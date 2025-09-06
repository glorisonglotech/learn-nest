import React from "react";

function Assessment() {
  return (
    <section className="md:flex border md:flex-row md:items-center p-6 justify-between h-[70vh]">
      {/* Text Section */}
      <header>
        <h1 className="text-3xl font-bold mb-4">Assessment Managements</h1>
        <p className="text-gray-600 mb-6">
          Manage your assessments, quizzes, and assignments effectively.
        </p>
      </header>

      {/* Button Section */}
      <aside className="md:w-[20%] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 justify-center items-center flex mb-6">
        <button type="button">+ Create Assessments</button>
      </aside>
    </section>
  );
}

export default Assessment;
