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
import Privacy from "./pages/Sub-pages/Company/Privacy";
import Terms from "./pages/Sub-pages/Company/Terms";
import ContactUs from "./Pages/Sub-pages/Supports/ContactUs";
import Documentation from "./Pages/Sub-pages/Supports/Documentation";
import HelpCenter from "./Pages/Sub-pages/Supports/HelpCenter";
import SystemStatus from "./pages/Sub-pages/Supports/SystemStatus";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuth, setISauth] = useState(true);

  setISauth(false);

  return (
    <Router>
      {isAuth ? (
        <div>
          <Navbar
            className="border"
            onLoginClick={() => setIsLoginOpen(true)}
            onSignUpClick={() => setIsSignUpOpen(true)}
            isAuth={isAuth}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Assessments" element={<Assessments />} />
            <Route path="/Progress" element={<Progress />} />
            <Route path="/Communication" element={<Communication />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />

            {/* Sub pages */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/ContactUS" element={<ContactUs />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="systemstatus" element={<SystemStatus />} />
          </Routes>

          <Footer />
        </div>
      ) : (
        <LandingPage
          onLoginClick={() => setIsLoginOpen(true)}
          onSignUpClick={() => setIsSignUpOpen(true)}
        />
      )}

      {/* 🔹 Render modals globally so they work in both LandingPage & Dashboard */}
      {isLoginOpen && (
        <Login
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSignUpClick={() => {
            setIsLoginOpen(false);
            setIsSignUpOpen(true);
          }}
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
