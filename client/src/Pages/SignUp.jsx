import React, { useState } from "react";
import api from "../components/lib/axios";
import toast from "react-hot-toast";

function SignUp({ isOpen, onClose, onLoginClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const switchToLogin = () => {
    onClose();
    onLoginClick();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/signup", {
        name: fullName,
        email,
        password,
      });
      toast.success("Account created successfully!");
      setFullName("");
      setEmail("");
      setPassword("");
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed");
      console.error("Signup error:", error);
    }
  };

  return (
    <main
      className="fixed inset-0 bg-gray-500/25 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <section
        className="bg-white p-8 rounded-lg shadow-lg w-[70%] md:w-[40%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close sign up form"
        >
          ✕
        </button>

        <header>
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        </header>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <fieldset>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your name..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </fieldset>

          <fieldset>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Choose a password..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        <footer>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={switchToLogin}
            >
              Log in
            </span>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default SignUp;
