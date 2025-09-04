import React from "react";

function Communication() {
  return (
    <main className="p-6 min-h-screen">
      {/* Page Title */}
      <header>
        <h1 className="text-2xl font-semibold mb-6">Communication Hub</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Messages Section */}
        <article className="bg-white p-4 rounded-lg shadow border">
          <header className="md:flex justify-between items-center">
            <h2 className="text-lg font-medium">Messages</h2>
            <button className="bg-blue-500 text-white px-4 mt-4 py-2 rounded-lg hover:bg-blue-600">
              Compose Message
            </button>
          </header>
        </article>

        {/* Forum Discussions Section */}
        <article className="bg-white p-4 rounded-lg shadow border">
          <header className="md:flex justify-between items-center">
            <h2 className="text-lg font-medium">Forum Discussions</h2>
            <button className="bg-blue-500 text-white px-4 mt-4 py-2 rounded-lg hover:bg-blue-600">
              New Discussion
            </button>
          </header>

          {/* Forum Items */}
          <section className="mt-4 space-y-3">
            <article className="p-3 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold">AI Workshop Thoughts</h3>
              <p className="text-sm text-gray-600">
                Share insights from recent workshop.
              </p>
              <footer className="flex justify-between items-center mt-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  Intro to Artificial Intelligence
                </span>
                <time className="text-xs text-gray-500">Aug 8</time>
              </footer>
            </article>

            <article className="p-3 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold">Chemical Bonds Discussion</h3>
              <p className="text-sm text-gray-600">
                Discuss various types of chemical bonds.
              </p>
              <footer className="flex justify-between items-center mt-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  Chemistry 101
                </span>
                <time className="text-xs text-gray-500">Aug 8</time>
              </footer>
            </article>
          </section>
        </article>
      </section>

      {/* Course Announcements */}
      <section className="bg-white p-4 rounded-lg shadow border mt-6">
        <header className="md:flex justify-between items-center">
          <h2 className="text-lg font-medium">Course Announcements</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            New Announcement
          </button>
        </header>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <article className="p-3 border rounded-lg bg-blue-50 hover:bg-blue-100">
            <h3 className="font-semibold">Next Business Strategy Call</h3>
            <p className="text-sm text-gray-700">
              Discussing future business strategies.
            </p>
            <footer className="flex justify-between items-center mt-2">
              <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                Business Management Essentials
              </span>
              <time className="text-xs text-gray-500">Aug 8</time>
            </footer>
          </article>

          <article className="p-3 border rounded-lg bg-blue-50 hover:bg-blue-100">
            <h3 className="font-semibold">Upcoming Exhibition</h3>
            <p className="text-sm text-gray-700">
              Join us for the exciting gallery event.
            </p>
            <footer className="flex justify-between items-center mt-2">
              <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                Art History Basics
              </span>
              <time className="text-xs text-gray-500">Aug 8</time>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Communication;
