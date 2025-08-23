import React, { useEffect } from "react";

function Login({ isOpen, onClose, onSignUpClick }) {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow ="hidden"
      }else{
        document.body.style.overflow ="auto"
      }
    });
  if (!isOpen) return null;
  const switchToSignUp = () => {
    onClose(); // close login modal
    onSignUpClick(); // open signup modal
  };

  return (
    <div
      className="fixed inset-0  bg-gray-500/25 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-[70%] md:w-[40%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Log In
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={switchToSignUp}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
