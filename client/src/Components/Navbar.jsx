import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar({ onLoginClick, onSignUpClick, isAuth }) {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className=" flex justify-between p-5 items-center   md:px-[40px] bg-blue-50">
 
      {/* Logo */}
      <div>Logo</div>
      
      {isAuth && (
        <ul className=" md:flex gap-5 hidden items-center">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/users">Users</Link>
          <Link to="/assessments">Assessments</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/communication">Communication</Link>
        </ul>
      )}


      {/* Right Side (Desktop) */}
      <div className="hidden md:flex gap-3">
        <button
          onClick={onLoginClick}
          className="bg-blue-700 px-3 py-1 rounded text-white"
        >
          Login
        </button>
        <button
          onClick={onSignUpClick}
          className="bg-green-600 px-3 py-1 rounded text-white"
        >
          Sign up
        </button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden p-4">
          {isAuth && (
            <ul className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link to="/courses" onClick={() => setIsOpen(false)}>
                Courses
              </Link>
              <Link to="/users" onClick={() => setIsOpen(false)}>
                Users
              </Link>
              <Link to="/assessments" onClick={() => setIsOpen(false)}>
                Assessments
              </Link>
              <Link to="/progress" onClick={() => setIsOpen(false)}>
                Progress
              </Link>
              <Link to="/communication" onClick={() => setIsOpen(false)}>
                Communication
              </Link>
            </ul>
          )}

          <div className="mt-4 flex flex-col gap-3">
            <button
              // to="/login"
              onClick={() => {
                setIsOpen(!isOpen);
                onLoginClick();
              }}
              className="bg-blue-700 px-3 py-1 rounded text-white text-center"
              // onClick={() => setIsOpen(false)}
            >
              Login
            </button>
            <button
              // to="/signup"
              onClick={() => {
                onSignUpClick();
                setIsOpen(!isOpen);
              }}
              className="bg-green-600 px-3 py-1 rounded text-white text-center"
              // onClick={() => setIsOpen(false)}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
