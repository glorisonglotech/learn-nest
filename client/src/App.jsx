import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Users from "./Pages/Users";
import Assessments from "./Pages/Assessment";
import Progress from "./Pages/Progress";
import Communication from "./Pages/Communication";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/Sub-pages/Company/AboutUs";
import Blog from "./Pages/Sub-pages/Company/Blog";
import Privacy from "./Pages/Sub-pages/Company/Privacy";
import Terms from "./Pages/Sub-pages/Company/Terms";
import ContactUs from "./Pages/Sub-pages/Supports/ContactUs";
import Documentation from "./Pages/Sub-pages/Supports/Documentation";
import HelpCenter from "./Pages/Sub-pages/Supports/HelpCenter";
import SystemStatus from "./Pages/Sub-pages/Supports/SystemStatus";
import LandingPage from "./Pages/LandingPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuth, setISauth] = useState(true);

  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            border: "1px solid blue",
          },
        }}
      />

      {/* Always show Navbar & Footer */}
      <Navbar
        onLoginClick={() => setIsLoginOpen(true)}
        onSignUpClick={() => setIsSignUpOpen(true)}
        isAuth={isAuth}
      />

      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <LandingPage
              onLoginClick={() => setIsLoginOpen(true)}
              onSignUpClick={() => setIsSignUpOpen(true)}
              isAuth={isAuth}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/systemstatus" element={<SystemStatus />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assessments"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Assessments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Progress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/communication"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Communication />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

      <Footer />

      {/* 🔹 Render modals */}
      {isLoginOpen && (
        <Login
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSignUpClick={() => {
            setIsLoginOpen(false);
            setIsSignUpOpen(true);
          }}
          setISauth={setISauth}
        />
      )}

      {isSignUpOpen && (
        <SignUp
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          onLoginClick={() => {
            setIsSignUpOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}
    </Router>
  );
};

export default App;
