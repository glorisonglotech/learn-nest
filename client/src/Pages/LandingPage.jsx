import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function LandingPage({ onLoginClick, onSignUpClick }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with same props */}
      <Navbar onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />

      {/* Landing Content */}
      <main className="flex-grow flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Learn Nest
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your one-stop platform for mastering new skills, exploring knowledge,
            and growing your career with personalized learning.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onSignUpClick}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </button>
            <button
              onClick={onLoginClick}
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 max-w-6xl w-full text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Learn Nest?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
              <p className="text-gray-600">
                Hands-on learning with projects and quizzes designed for
                real-world application.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience and
                knowledge to share.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace, anytime and anywhere with mobile-friendly
                access.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-blue-600 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="mb-8 text-lg">
            Join thousands of learners growing with Learn Nest.
          </p>
          <button
            onClick={onSignUpClick}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Join Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
