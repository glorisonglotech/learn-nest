import React, { useState } from "react";
import api from "../components/lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login({ isOpen, onClose, onSignUpClick, setIsauth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const switchToSignUp = () => {
    onClose();
    onSignUpClick();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });

      toast.success("Logged in successfully!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      onClose();
      setIsauth(true);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login error:", error);
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
          aria-label="Close login form"
        >
          ✕
        </button>

        <header>
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        </header>

        <form className="space-y-4" onSubmit={handleLogin}>
          <fieldset>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            onClick={() => {
              setIsauth(true);
            }}
          >
            Log In
          </button>

          <footer>
            <p className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={switchToSignUp}
              >
                Sign up
              </span>
            </p>
          </footer>
        </form>
      </section>
    </main>
  );
}

export default Login;
