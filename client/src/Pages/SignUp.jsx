
import React from "react";

function SignUp({ isOpen, onClose,onLoginClick }) {
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow ="hidden"
  //     }else{
  //       document.body.style.overflow ="auto"
  //     }
  //   }
  // );

  if (!isOpen) return null;
    const switchToLogin = () => {
    onClose(); // close login modal
    onLoginClick(); // open signup modal
  };

  return (
    <div
      className="fixed inset-0  bg-gray-500/25 flex justify-center items-center z-50"
      onClick={onClose} // click backdrop to close
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-[70%] md:w-[40%] relative"
        onClick={(e) => e.stopPropagation()} // stop closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your name..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Choose a password..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={switchToLogin}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp
